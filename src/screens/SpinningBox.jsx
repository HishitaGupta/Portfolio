// import { useRef, useState } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Html, useCursor } from '@react-three/drei'

// export function SpinningBox({ scale, ...props }) {
//   // This reference gives us direct access to the THREE.Mesh object
//   const ref = useRef()
//   // Hold state for hovered and clicked events
//   const [hovered, hover] = useState(false)
//   const [clicked, click] = useState(false)
//   useCursor(hovered)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
//   // Return the view, these are regular Threejs elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       scale={clicked ? scale * 1.4 : scale * 1.2}
//       onClick={(event) => click(!clicked)}
//       onPointerOver={(event) => hover(true)}
//       onPointerOut={(event) => hover(false)}>
//       <boxGeometry />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'indianred'} />
      
//     </mesh>
//   )
// }

import { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'
import { BoxGeometry, MeshStandardMaterial } from 'three'

export function SpinningBox({ 
  scale = 1,
  baseColor = 'indianred',
  hoverColor = 'hotpink',
  rotationSpeed = 1,
  scaleMultiplier = { hover: 1.2, click: 1.4 },
  ...props 
}) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  
  // Apply cursor changes on hover
  useCursor(hovered)
  
  // Memoize the geometry to prevent recreation on each render
  const geometry = useMemo(() => new BoxGeometry(), [])
  
  // Memoize the material to prevent recreation on each render
  const material = useMemo(() => {
    const mat = new MeshStandardMaterial()
    return mat
  }, [])
  
  // Update material color when hover state changes
  useEffect(() => {
    material.color.set(hovered ? hoverColor : baseColor)
  }, [hovered, hoverColor, baseColor, material])
  
  // Optimize scale calculation
  const currentScale = useMemo(() => {
    const multiplier = clicked ? scaleMultiplier.click : scaleMultiplier.hover
    return scale * multiplier
  }, [scale, clicked, scaleMultiplier])
  
  // Optimize rotation animation using elapsed time
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed
      meshRef.current.rotation.y += delta * rotationSpeed
    }
  })

  // Memoize event handlers
  const handleClick = useCallback(() => {
    setClicked(prev => !prev)
  }, [])

  const handlePointerOver = useCallback(() => {
    setHovered(true)
  }, [])

  const handlePointerOut = useCallback(() => {
    setHovered(false)
  }, [])

  // Cleanup function for geometry and material
  useEffect(() => {
    return () => {
      geometry.dispose()
      material.dispose()
    }
  }, [geometry, material])

  return (
    <mesh
      {...props}
      ref={meshRef}
      geometry={geometry}
      material={material}
      scale={currentScale}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  )
}

// Add proper TypeScript types if needed
SpinningBox.defaultProps = {
  scale: 1,
  baseColor: 'indianred',
  hoverColor: 'hotpink',
  rotationSpeed: 1,
  scaleMultiplier: { hover: 1.2, click: 1.4 }
}