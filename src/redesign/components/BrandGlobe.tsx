'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import ThreeGlobe from 'three-globe';

const MAROON        = '#B91D2D';
const MAROON_BRIGHT = '#F04A5B';   // for continents so they read on the base
const MAROON_HOT    = '#FF6B7A';   // for markers so they pop
const MAROON_HALO   = '#F7D7DA';
const BASE_SPHERE   = '#5A1220';   // dark maroon, but not near-black

// Actual SimplifyQA offices.
const OFFICES = [
  { lat: 12.9716, lng: 77.5946,  name: 'Bengaluru, India' },        // HQ
  { lat: 3.139,   lng: 101.6869, name: 'Kuala Lumpur, Malaysia' },
  { lat: 28.5383, lng: -81.3792, name: 'Orlando, Florida, USA' },
];

const HQ = OFFICES[0];
const ARCS = OFFICES.slice(1).map((o) => ({
  startLat: HQ.lat,
  startLng: HQ.lng,
  endLat: o.lat,
  endLng: o.lng,
  color: MAROON,
}));

const COUNTRIES_URL =
  'https://raw.githubusercontent.com/vasturiano/three-globe/master/example/hexed-polygons/ne_110m_admin_0_countries.geojson';

export default function BrandGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);
    camera.position.set(0, 0, 300);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';

    // Lights — brighter overall so the sphere reads well
    scene.add(new THREE.AmbientLight(new THREE.Color(MAROON_HALO), 1.1));
    const dir = new THREE.DirectionalLight(0xffffff, 1.6);
    dir.position.set(-100, 60, 200);
    scene.add(dir);
    const point = new THREE.PointLight(new THREE.Color(MAROON_HOT), 1.2);
    point.position.set(200, 100, 250);
    scene.add(point);

    // Globe
    const globe = new ThreeGlobe({ waitForGlobeReady: true, animateIn: true })
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.55)
      .showAtmosphere(true)
      .atmosphereColor(MAROON_BRIGHT)
      .atmosphereAltitude(0.22);

    const globeMaterial = globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(BASE_SPHERE);
    globeMaterial.emissive = new THREE.Color('#8D1826');
    globeMaterial.emissiveIntensity = 0.35;
    globeMaterial.shininess = 1.2;

    // Points and arcs — hot maroon so they pop against the sphere
    globe
      .pointsData(OFFICES)
      .pointColor(() => MAROON_HOT)
      .pointAltitude(0.02)
      .pointRadius(0.45)
      .arcsData(ARCS)
      .arcColor(() => MAROON_HOT)
      .arcAltitude(0.28)
      .arcStroke(0.4)
      .arcDashLength(0.4)
      .arcDashGap(0.6)
      .arcDashAnimateTime(3200);

    scene.add(globe);

    // Load hexed country polygons — bright red so continents visibly
    // stand off the dark maroon sphere
    let cancelled = false;
    fetch(COUNTRIES_URL)
      .then((r) => r.json())
      .then((geo) => {
        if (cancelled) return;
        globe.hexPolygonsData(geo.features).hexPolygonColor(() => MAROON_BRIGHT);
      })
      .catch(() => {});

    // Interaction: drag to rotate, no zoom/pan (page scroll stays intact).
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.6;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.85;

    // Pause auto-rotate while user is interacting, resume 2s after they stop.
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    const onStart = () => {
      controls.autoRotate = false;
      if (resumeTimer) clearTimeout(resumeTimer);
    };
    const onEnd = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { controls.autoRotate = true; }, 2000);
    };
    controls.addEventListener('start', onStart);
    controls.addEventListener('end', onEnd);

    // Show grab cursor so the affordance is obvious.
    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.addEventListener('pointerdown', () => {
      renderer.domElement.style.cursor = 'grabbing';
    });
    renderer.domElement.addEventListener('pointerup', () => {
      renderer.domElement.style.cursor = 'grab';
    });

    // Animation loop
    let raf = 0;
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    // Resize
    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (resumeTimer) clearTimeout(resumeTimer);
      controls.dispose();
      ro.disconnect();
      renderer.dispose();
      globeMaterial.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* Big soft glow behind the globe */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(240,74,91,0.55), rgba(185,29,45,0.20) 55%, transparent 78%)',
        }}
      />
      {/* Tighter inner glow so the sphere sits on a hot maroon halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2 rounded-full blur-2xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(255,107,122,0.35), transparent 70%)',
        }}
      />
      <div ref={mountRef} className="relative w-full h-full" />
    </div>
  );
}
