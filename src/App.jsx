import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers'
import * as easingnew from "maath/easing"
import { useEffect, useRef, useState } from 'react'
import * as dat from 'dat.gui'

const suzi = import('@pmndrs/assets/models/bunny.glb')




export default function App() {
  // Add state for viewport dimensions
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Adjust camera settings based on viewport
  const cameraSettings = {
    position: [0, 0, viewport.width < 768 ? 6.5 : 4.5], // Move camera back on mobile
    fov: viewport.width < 768 ? 60 : 45, // Wider FOV on mobile
    near: 1,
    far: 20
  }

  return (
    <Canvas 
      shadows 
      dpr={[1, Math.min(2, window.devicePixelRatio)]} // Limit DPR for performance
      camera={cameraSettings}
      style={{height: '100vh', width: '100vw'}} // Responsive canvas size
      eventSource={document.getElementById('root')} 
      eventPrefix="client"
    >
      
      {/* Lights */}
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      
      {/* Main scene */}
      <group position={[0, -1, 1]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={viewport.width < 768 ? 0.35 : 0.5} /> {/* Scale down model on mobile */}
        </Instances>


        
         {/* <Bun scale={0.4} position={[0, 0.3, 0.5]} rotation={[0, -Math.PI * 0.85, 0]} /> */}
         <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="#35c19f" />

        
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={Math.min(2048, viewport.width)} // Lower resolution on mobile
            mixBlur={1}
            mixStrength={180}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
      </group>

      {/* Postprocessing - Adjust quality based on viewport */}
      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={0} 
          mipmapBlur 
          luminanceSmoothing={0.0} 
          intensity={viewport.width < 768 ? 1.5 : 2} 
        />
        <DepthOfField 
          target={[0, 0, 13]} 
          focalLength={0.3} 
          bokehScale={1} 
          height={viewport.height} 
        />
      </EffectComposer>

      <BakeShadows />
      {/* <axesHelper args={[5]} /> */}
    </Canvas>
  )
}

function Bun(props) {
  const { nodes } = useGLTF(suspend(suzi).default)
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  )
}
