'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, OrbitControls, Line, Float } from '@react-three/drei'
import * as THREE from 'three'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

// Major tech hubs for connection points
const LOCATIONS = [
  { lat: 12.9716, lng: 77.5946, name: 'Bengaluru', isHQ: true },
  { lat: 37.7749, lng: -122.4194, name: 'San Francisco' },
  { lat: 40.7128, lng: -74.0060, name: 'New York' },
  { lat: 51.5074, lng: -0.1278, name: 'London' },
  { lat: 35.6762, lng: 139.6503, name: 'Tokyo' },
  { lat: -33.8688, lng: 151.2093, name: 'Sydney' },
  { lat: 1.3521, lng: 103.8198, name: 'Singapore' },
  { lat: 52.5200, lng: 13.4050, name: 'Berlin' },
  { lat: 25.2048, lng: 55.2708, name: 'Dubai' },
  { lat: 22.3193, lng: 114.1694, name: 'Hong Kong' },
]

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Animated connection arc with gradient effect
function ConnectionArc({
  start,
  end,
  color,
  delay = 0
}: {
  start: THREE.Vector3
  end: THREE.Vector3
  color: string
  delay?: number
}) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const points = useMemo(() => {
    const midPoint = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
    midPoint.normalize().multiplyScalar(1.5)

    const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end)
    return curve.getPoints(64).map(p => [p.x, p.y, p.z] as [number, number, number])
  }, [start, end])

  useFrame((state) => {
    if (!visible) return
    const t = (Math.sin(state.clock.elapsedTime * 0.8 + delay) + 1) / 2
    setProgress(t)
  })

  if (!visible) return null

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.3 + progress * 0.4}
      // @ts-ignore - dashed is valid
      dashed
      dashScale={50}
      dashSize={0.5}
      gapSize={0.3}
    />
  )
}

// Pulsing location marker with glow
function LocationMarker({
  position,
  color,
  isHQ = false,
  isDark = false
}: {
  position: THREE.Vector3
  color: string
  isHQ?: boolean
  isDark?: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const pulseRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0)
    }
    if (pulseRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.4
      pulseRef.current.scale.setScalar(scale)
      const material = pulseRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.4 - Math.sin(state.clock.elapsedTime * 2) * 0.3
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2
      glowRef.current.scale.setScalar(scale)
    }
  })

  const markerSize = isHQ ? 0.025 : 0.018
  const glowSize = isHQ ? 0.08 : 0.05

  return (
    <group position={position}>
      {/* Core marker */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[markerSize, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Pulse ring */}
      <mesh ref={pulseRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[markerSize * 1.5, markerSize * 2.5, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>

      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[glowSize, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

// Atmospheric halo around globe
function GlobeAtmosphere({ color, isDark }: { color: string; isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.time.value = state.clock.elapsedTime
    }
  })

  const atmosphereShader = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(color) },
      intensity: { value: isDark ? 0.6 : 0.5 },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      uniform float intensity;
      varying vec3 vNormal;
      void main() {
        float glow = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
        float pulse = 0.5 + 0.5 * sin(time * 0.5);
        gl_FragColor = vec4(color, glow * intensity * (0.8 + 0.2 * pulse));
      }
    `,
  }), [color, isDark])

  return (
    <mesh ref={meshRef} scale={1.15}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        {...atmosphereShader}
        transparent
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  )
}

// Main globe mesh with enhanced materials
function GlobeMesh({ brandColor, isDark }: { brandColor: string; isDark: boolean }) {
  const globeRef = useRef<THREE.Group>(null)
  const gridRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.08
    }
  })

  const locations = useMemo(() =>
    LOCATIONS.map(loc => ({
      ...loc,
      position: latLngToVector3(loc.lat, loc.lng, 1.01),
    })),
    []
  )

  const connections = useMemo(() => {
    const hq = locations[0]
    return locations.slice(1).map((loc, i) => ({
      start: hq.position,
      end: loc.position,
      delay: i * 0.3,
    }))
  }, [locations])

  // Globe colors based on theme
  const globeColor = isDark ? '#0a0a12' : '#e8eaef'
  const gridColor = isDark ? brandColor : brandColor
  const gridOpacity = isDark ? 0.15 : 0.12

  return (
    <group ref={globeRef}>
      {/* Main globe body */}
      <Sphere args={[1, 64, 64]}>
        <meshPhongMaterial
          color={globeColor}
          transparent
          opacity={isDark ? 0.95 : 0.95}
          shininess={isDark ? 30 : 20}
        />
      </Sphere>

      {/* Latitude/longitude grid */}
      <mesh ref={gridRef}>
        <sphereGeometry args={[1.002, 48, 48]} />
        <meshBasicMaterial
          color={gridColor}
          transparent
          opacity={gridOpacity}
          wireframe
        />
      </mesh>

      {/* Subtle inner glow */}
      <Sphere args={[0.98, 32, 32]}>
        <meshBasicMaterial
          color={brandColor}
          transparent
          opacity={isDark ? 0.02 : 0.05}
        />
      </Sphere>

      {/* Atmospheric glow */}
      <GlobeAtmosphere color={brandColor} isDark={isDark} />

      {/* Location markers */}
      {locations.map((loc, i) => (
        <LocationMarker
          key={i}
          position={loc.position}
          color={brandColor}
          isHQ={loc.isHQ}
          isDark={isDark}
        />
      ))}

      {/* Connection arcs */}
      {connections.map((conn, i) => (
        <ConnectionArc
          key={i}
          start={conn.start}
          end={conn.end}
          color={brandColor}
          delay={conn.delay}
        />
      ))}
    </group>
  )
}

// Floating particles around globe
function Particles({ count = 50, brandColor }: { count?: number; brandColor: string }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 1.5 + Math.random() * 0.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [count])

  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color={brandColor}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

// Scene setup with lighting
function Scene({ brandColor, isDark }: { brandColor: string; isDark: boolean }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0.3, 2.8)
  }, [camera])

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={isDark ? 0.2 : 0.5} />

      {/* Key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={isDark ? 0.4 : 0.7}
        color={isDark ? '#ffffff' : '#ffffff'}
      />

      {/* Fill light with brand color */}
      <pointLight
        position={[-5, -3, 2]}
        intensity={isDark ? 0.3 : 0.25}
        color={brandColor}
      />

      {/* Rim light */}
      <pointLight
        position={[0, 5, -5]}
        intensity={isDark ? 0.2 : 0.15}
        color={isDark ? brandColor : brandColor}
      />

      <Float
        speed={1}
        rotationIntensity={0.2}
        floatIntensity={0.3}
      >
        <GlobeMesh brandColor={brandColor} isDark={isDark} />
      </Float>

      <Particles brandColor={brandColor} count={80} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}

interface GlobeProps {
  className?: string
}

export function Globe({ className }: GlobeProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const brandColor = '#AD1927'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={cn('w-full h-full', className)}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-600/10 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-surface-1 to-surface-2 animate-pulse delay-150" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('globe-container relative', className)}>
      {/* Glow effect behind globe - contained within bounds */}
      <div
        className={cn(
          'absolute rounded-full pointer-events-none',
          isDark
            ? 'bg-brand-500/25'
            : 'bg-brand-500/15'
        )}
        style={{
          top: '50%',
          left: '50%',
          width: '45%',
          height: '45%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

      <Canvas
        camera={{ fov: 45, near: 0.1, far: 100 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Scene brandColor={brandColor} isDark={isDark} />
      </Canvas>
    </div>
  )
}
