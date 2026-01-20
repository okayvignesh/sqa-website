'use client'

import { useRef, useMemo, useEffect, useState, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, OrbitControls, Text, Html, Line } from '@react-three/drei'
import * as THREE from 'three'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

// Office locations with coordinates
const OFFICES = [
  {
    name: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lng: 77.5946,
    isHQ: true,
    description: 'Global Headquarters',
  },
  {
    name: 'New York',
    country: 'USA',
    lat: 40.7128,
    lng: -74.006,
    isHQ: false,
    description: 'North America',
  },
  {
    name: 'London',
    country: 'UK',
    lat: 51.5074,
    lng: -0.1278,
    isHQ: false,
    description: 'Europe & Middle East',
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    lat: 1.3521,
    lng: 103.8198,
    isHQ: false,
    description: 'Asia Pacific',
  },
]

// Simplified world map points (major landmasses)
const WORLD_POINTS = generateWorldPoints()

function generateWorldPoints() {
  const points: { lat: number; lng: number }[] = []

  // North America
  for (let lat = 25; lat <= 70; lat += 3) {
    for (let lng = -170; lng <= -50; lng += 3) {
      if (isLandNA(lat, lng)) points.push({ lat, lng })
    }
  }

  // South America
  for (let lat = -55; lat <= 12; lat += 3) {
    for (let lng = -80; lng <= -35; lng += 3) {
      if (isLandSA(lat, lng)) points.push({ lat, lng })
    }
  }

  // Europe
  for (let lat = 35; lat <= 70; lat += 2.5) {
    for (let lng = -10; lng <= 60; lng += 2.5) {
      if (isLandEU(lat, lng)) points.push({ lat, lng })
    }
  }

  // Africa
  for (let lat = -35; lat <= 37; lat += 3) {
    for (let lng = -18; lng <= 52; lng += 3) {
      if (isLandAF(lat, lng)) points.push({ lat, lng })
    }
  }

  // Asia
  for (let lat = 5; lat <= 75; lat += 2.5) {
    for (let lng = 60; lng <= 150; lng += 2.5) {
      if (isLandAS(lat, lng)) points.push({ lat, lng })
    }
  }

  // Australia
  for (let lat = -45; lat <= -10; lat += 3) {
    for (let lng = 113; lng <= 155; lng += 3) {
      if (isLandAU(lat, lng)) points.push({ lat, lng })
    }
  }

  return points
}

// Simplified land detection functions
function isLandNA(lat: number, lng: number): boolean {
  if (lat > 60 && lng < -140) return lat < 72 && lng > -170
  if (lat > 48 && lng < -90) return true
  if (lat > 25 && lat < 50 && lng > -130 && lng < -65) return true
  return false
}

function isLandSA(lat: number, lng: number): boolean {
  if (lat > -5 && lng > -80 && lng < -50) return true
  if (lat > -25 && lat < 0 && lng > -70 && lng < -35) return true
  if (lat > -55 && lat < -20 && lng > -75 && lng < -55) return true
  return false
}

function isLandEU(lat: number, lng: number): boolean {
  if (lat > 36 && lat < 72 && lng > -10 && lng < 40) return true
  return false
}

function isLandAF(lat: number, lng: number): boolean {
  const centerLng = 20
  const width = 35 - Math.abs(lat) * 0.3
  return lng > centerLng - width && lng < centerLng + width
}

function isLandAS(lat: number, lng: number): boolean {
  if (lat > 35 && lng > 60 && lng < 140) return true
  if (lat > 8 && lat < 35 && lng > 65 && lng < 145) return true
  if (lat > 0 && lat < 20 && lng > 95 && lng < 110) return true
  return false
}

function isLandAU(lat: number, lng: number): boolean {
  if (lat > -40 && lat < -12 && lng > 115 && lng < 152) return true
  return false
}

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// World map dots
function WorldDots({ isDark, brandColor }: { isDark: boolean; brandColor: string }) {
  const points = useMemo(() => {
    const positions = new Float32Array(WORLD_POINTS.length * 3)
    WORLD_POINTS.forEach((point, i) => {
      const pos = latLngToVector3(point.lat, point.lng, 1.005)
      positions[i * 3] = pos.x
      positions[i * 3 + 1] = pos.y
      positions[i * 3 + 2] = pos.z
    })
    return positions
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={WORLD_POINTS.length}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color={isDark ? '#94a3b8' : '#64748b'}
        transparent
        opacity={isDark ? 0.6 : 0.4}
        sizeAttenuation
      />
    </points>
  )
}

// Enhanced office marker with label
function OfficeMarker({
  office,
  brandColor,
  isDark,
  isActive,
  onClick,
}: {
  office: typeof OFFICES[0]
  brandColor: string
  isDark: boolean
  isActive: boolean
  onClick: () => void
}) {
  const position = useMemo(
    () => latLngToVector3(office.lat, office.lng, 1.02),
    [office.lat, office.lng]
  )
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.lookAt(0, 0, 0)
    }
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3
      ringRef.current.scale.setScalar(scale)
      const material = ringRef.current.material as THREE.MeshBasicMaterial
      material.opacity = (0.5 - Math.sin(state.clock.elapsedTime * 2) * 0.3) * (isActive ? 1.5 : 1)
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15
      glowRef.current.scale.setScalar(scale)
    }
  })

  const markerSize = office.isHQ ? 0.035 : 0.025
  const glowSize = office.isHQ ? 0.12 : 0.08

  return (
    <group position={position} onClick={onClick}>
      {/* Core marker */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[markerSize, 24, 24]} />
        <meshBasicMaterial color={brandColor} />
      </mesh>

      {/* Pulse ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[markerSize * 1.8, markerSize * 2.8, 32]} />
        <meshBasicMaterial
          color={brandColor}
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[glowSize, 16, 16]} />
        <meshBasicMaterial color={brandColor} transparent opacity={0.2} />
      </mesh>

      {/* HTML Label */}
      <Html
        position={[0, markerSize * 4, 0]}
        center
        style={{
          pointerEvents: isActive ? 'auto' : 'none',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          className={cn(
            'px-3 py-2 rounded-lg whitespace-nowrap',
            'bg-white/90 dark:bg-zinc-900/90',
            'backdrop-blur-md',
            'border border-white/50 dark:border-white/10',
            'shadow-lg',
            'text-center',
            'transform -translate-y-2'
          )}
        >
          <p className="text-sm font-semibold text-text-primary">{office.name}</p>
          <p className="text-xs text-text-secondary">{office.description}</p>
        </div>
      </Html>
    </group>
  )
}

// Graticule (lat/lng grid lines)
function Graticule({ isDark }: { isDark: boolean }) {
  const lines = useMemo(() => {
    const linePoints: [number, number, number][][] = []

    // Latitude lines
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: [number, number, number][] = []
      for (let lng = 0; lng <= 360; lng += 5) {
        const vec = latLngToVector3(lat, lng - 180, 1.001)
        points.push([vec.x, vec.y, vec.z])
      }
      linePoints.push(points)
    }

    // Longitude lines
    for (let lng = 0; lng < 360; lng += 30) {
      const points: [number, number, number][] = []
      for (let lat = -90; lat <= 90; lat += 5) {
        const vec = latLngToVector3(lat, lng - 180, 1.001)
        points.push([vec.x, vec.y, vec.z])
      }
      linePoints.push(points)
    }

    return linePoints
  }, [])

  return (
    <group>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color={isDark ? '#334155' : '#e2e8f0'}
          transparent
          opacity={isDark ? 0.3 : 0.2}
          lineWidth={1}
        />
      ))}
    </group>
  )
}

// Main globe component
function GlobeMesh({
  brandColor,
  isDark,
  activeOffice,
  setActiveOffice,
}: {
  brandColor: string
  isDark: boolean
  activeOffice: number | null
  setActiveOffice: (index: number | null) => void
}) {
  const globeRef = useRef<THREE.Group>(null)
  const [autoRotate, setAutoRotate] = useState(true)

  useFrame((_, delta) => {
    if (globeRef.current && autoRotate) {
      globeRef.current.rotation.y += delta * 0.1
    }
  })

  const globeColor = isDark ? '#0c0c14' : '#f1f5f9'

  return (
    <group
      ref={globeRef}
      onPointerOver={() => setAutoRotate(false)}
      onPointerOut={() => {
        setAutoRotate(true)
        setActiveOffice(null)
      }}
    >
      {/* Base globe */}
      <Sphere args={[1, 64, 64]}>
        <meshPhongMaterial
          color={globeColor}
          transparent
          opacity={0.95}
          shininess={isDark ? 50 : 20}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere args={[0.98, 32, 32]}>
        <meshBasicMaterial
          color={brandColor}
          transparent
          opacity={isDark ? 0.05 : 0.02}
        />
      </Sphere>

      {/* Atmosphere */}
      <Sphere args={[1.08, 64, 64]}>
        <meshBasicMaterial
          color={brandColor}
          transparent
          opacity={isDark ? 0.08 : 0.04}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Graticule grid */}
      <Graticule isDark={isDark} />

      {/* World map dots */}
      <WorldDots isDark={isDark} brandColor={brandColor} />

      {/* Office markers */}
      {OFFICES.map((office, index) => (
        <OfficeMarker
          key={office.name}
          office={office}
          brandColor={brandColor}
          isDark={isDark}
          isActive={activeOffice === index}
          onClick={() => setActiveOffice(activeOffice === index ? null : index)}
        />
      ))}
    </group>
  )
}

// Scene
function Scene({
  brandColor,
  isDark,
  activeOffice,
  setActiveOffice,
}: {
  brandColor: string
  isDark: boolean
  activeOffice: number | null
  setActiveOffice: (index: number | null) => void
}) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0.5, 2.5)
  }, [camera])

  return (
    <>
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <directionalLight
        position={[5, 3, 5]}
        intensity={isDark ? 0.5 : 0.7}
        color="#ffffff"
      />
      <pointLight
        position={[-5, -3, 2]}
        intensity={isDark ? 0.4 : 0.2}
        color={brandColor}
      />
      <pointLight
        position={[0, 5, -5]}
        intensity={isDark ? 0.2 : 0.1}
        color={isDark ? brandColor : '#ffffff'}
      />

      <GlobeMesh
        brandColor={brandColor}
        isDark={isDark}
        activeOffice={activeOffice}
        setActiveOffice={setActiveOffice}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  )
}

interface OfficeGlobeProps {
  className?: string
  onOfficeSelect?: (office: typeof OFFICES[0] | null) => void
}

export function OfficeGlobe({ className, onOfficeSelect }: OfficeGlobeProps) {
  const [mounted, setMounted] = useState(false)
  const [activeOffice, setActiveOffice] = useState<number | null>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const brandColor = '#AD1927'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (onOfficeSelect) {
      onOfficeSelect(activeOffice !== null ? OFFICES[activeOffice] : null)
    }
  }, [activeOffice, onOfficeSelect])

  if (!mounted) {
    return (
      <div className={cn('w-full h-full', className)}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 to-brand-600/10 animate-pulse" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-surface-1 to-surface-2 animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      {/* Glow behind globe */}
      <div
        className={cn(
          'absolute inset-0 rounded-full blur-3xl',
          isDark
            ? 'bg-gradient-radial from-brand-500/15 via-brand-600/5 to-transparent'
            : 'bg-gradient-radial from-brand-500/10 via-brand-600/3 to-transparent'
        )}
        style={{ transform: 'scale(0.7)' }}
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
        <Scene
          brandColor={brandColor}
          isDark={isDark}
          activeOffice={activeOffice}
          setActiveOffice={setActiveOffice}
        />
      </Canvas>

      {/* Office legend */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {OFFICES.map((office, index) => (
          <button
            key={office.name}
            onClick={() => setActiveOffice(activeOffice === index ? null : index)}
            className={cn(
              'flex items-center gap-2 px-3 py-1.5 rounded-full',
              'text-xs font-medium transition-all duration-300',
              'bg-white/60 dark:bg-white/5',
              'backdrop-blur-md',
              'border border-white/40 dark:border-white/10',
              'hover:bg-white/80 dark:hover:bg-white/10',
              activeOffice === index && 'ring-2 ring-brand-500 bg-white dark:bg-white/10'
            )}
          >
            <span
              className={cn(
                'w-2 h-2 rounded-full',
                office.isHQ ? 'bg-brand-600' : 'bg-brand-400'
              )}
            />
            <span className="text-text-primary">{office.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export { OFFICES }
