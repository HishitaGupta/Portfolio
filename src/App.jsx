// import { Canvas, useFrame } from '@react-three/fiber'
// import { useGLTF, MeshReflectorMaterial, BakeShadows} from '@react-three/drei'
// import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
// import { easing } from 'maath'
// import { suspend } from 'suspend-react'
// import { Instances, Computers } from './Computers'
// import * as easingnew from "maath/easing"
// import { useEffect, useRef, useState } from 'react'
// import * as dat from 'dat.gui'
// import { Perf } from 'r3f-perf'

// export default function App() {
//   // Add state for viewport dimensions
//   const [viewport, setViewport] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   })

//   // Update dimensions on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setViewport({
//         width: window.innerWidth,
//         height: window.innerHeight
//       })
//     }

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   // Adjust camera settings based on viewport
//   const cameraSettings = {
//     position: [0, 0, viewport.width < 768 ? 6.5 : 4.5], // Move camera back on mobile
//     fov: viewport.width < 768 ? 60 : 45, // Wider FOV on mobile
//     near: 1,
//     far: 20
//   }

//   return (
    
//     <Canvas 
//       shadows 
//       dpr={[1, Math.min(2, window.devicePixelRatio)]} // Limit DPR for performance
//       camera={cameraSettings}
//       style={{height: '100vh', width: '100vw'}} // Responsive canvas size
//       eventSource={document.getElementById('root')} 
//       eventPrefix="client"
//     >
//       <Perf position="bottom-right" />
      
//       {/* Lights */}
//       <color attach="background" args={['black']} />
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      
//       {/* Main scene */}
//       <group position={[0, -1, 1]}>
//         {/* Auto-instanced sketchfab model */}
//         <Instances>
//           <Computers scale={viewport.width < 768 ? 0.35 : 0.5} /> {/* Scale down model on mobile */}
//         </Instances>


        
//          {/* <Bun scale={0.4} position={[0, 0.3, 0.5]} rotation={[0, -Math.PI * 0.85, 0]} /> */}
//          <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="#35c19f" />

        
//         {/* Plane reflections + distance blur */}
//         <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[50, 50]} />
//           <MeshReflectorMaterial
//             blur={[300, 30]}
//             resolution={Math.min(2048, viewport.width)} // Lower resolution on mobile
//             mixBlur={1}
//             mixStrength={180}
//             roughness={1}
//             depthScale={1.2}
//             minDepthThreshold={0.4}
//             maxDepthThreshold={1.4}
//             color="#202020"
//             metalness={0.8}
//           />
//         </mesh>
//       </group>

//       {/* Postprocessing - Adjust quality based on viewport */}
//       <EffectComposer disableNormalPass>
//         <Bloom 
//           luminanceThreshold={0} 
//           mipmapBlur 
//           luminanceSmoothing={0.0} 
//           intensity={viewport.width < 768 ? 1.5 : 2} 
//         />
//         <DepthOfField 
//           target={[0, 0, 13]} 
//           focalLength={0.3} 
//           bokehScale={0} 
//           height={viewport.height} 
//         />
//       </EffectComposer>

//       <BakeShadows />
//       {/* <axesHelper args={[5]} /> */}
//     </Canvas>
//   )
// }


import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { Instances, Computers } from './Computers'
import { Perf } from 'r3f-perf'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { KernelSize } from 'postprocessing'
import * as THREE from 'three'

// Constants
const MOBILE_BREAKPOINT = 768
const DEFAULT_SHADOW_MAP_SIZE = 1024
const MIN_DPR = 1
const MAX_DPR = 2

// Cleanup component to handle resource disposal
function CleanupManager() {
  const { gl, scene, camera } = useThree()

  useEffect(() => {
    return () => {
      // Traverse and dispose of all resources
      scene.traverse((object) => {
        if (!object) return

        // Dispose of geometries
        if (object.geometry) {
          object.geometry.dispose()
        }

        // Dispose of materials and textures
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => disposeMaterial(material))
          } else {
            disposeMaterial(object.material)
          }
        }
      })

      // Clear WebGL memory
      gl.dispose()

      // Clear Three.js cache
      THREE.Cache.clear()
    }
  }, [scene, gl])

  // Helper function to dispose of materials and their textures
  const disposeMaterial = (material) => {
    if (!material) return

    // Dispose textures
    Object.keys(material).forEach((prop) => {
      if (!material[prop]) return
      if (material[prop].isTexture) {
        material[prop].dispose()
      }
    })

    // Dispose material
    material.dispose()
  }

  return null
}

export default function App() {
  const [viewport, setViewport] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < MOBILE_BREAKPOINT
  }))

  

  const cameraSettings = useMemo(() => ({
    position: viewport.isMobile ? [0, 0, 6.5] : [0, 0, 4.5],
    fov: viewport.isMobile ? 60 : 45,
    near: 1,
    far: 20
  }), [viewport.isMobile])
 
  // const cameraSettings = {
  //   position: [0, 0, viewport.width < 768 ? 6.5 : 4.5], // Move camera back on mobile
  //   fov: viewport.width < 768 ? 60 : 45, // Wider FOV on mobile
  //   near: 1,
  //   far: 20
  // }


  // Memoized reflection material settings
  const reflectorSettings = useMemo(() => ({
    blur: [300, 30],
    resolution: Math.min(2048, viewport.width),
    mixBlur: 1,
    mixStrength: 180,
    roughness: 1,
    depthScale: 1.2,
    minDepthThreshold: 0.4,
    maxDepthThreshold: 1.4,
    color: "#202020",
    metalness: 0.8
  }), [viewport.width])

  // Memoized post-processing settings
  const postProcessSettings = useMemo(() => ({
    bloom: {
      luminanceThreshold: 0,
      mipmapBlur: true,
      luminanceSmoothing: 0.0,
      intensity: viewport.isMobile ? 1.5 : 2
    },
    dof: {
      target: [0, 0, 13],
      focalLength: 0.3,
      bokehScale: 0,
      height: viewport.height
    }
  }), [viewport.isMobile, viewport.height])

  // Optimized resize handler with debounce and cleanup
  useEffect(() => {
    let timeoutId = null
    let isDisposed = false
    
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        if (!isDisposed) {
          setViewport({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth < MOBILE_BREAKPOINT
          })
        }
      }, 250)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      isDisposed = true
      window.removeEventListener('resize', handleResize)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  // Scene content with cleanup
  const SceneContent = useMemo(() => (
    <group position={[0, -1, 1]}>
      <Instances>
        <Computers scale={viewport.isMobile ? 0.35 : 0.5} />
      </Instances>

      <pointLight
        distance={1.5}
        intensity={1}
        position={[-0.15, 0.7, 0]}
        color="#35c19f"
      />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial {...reflectorSettings} />
      </mesh>
    </group>
  ), [viewport.isMobile, reflectorSettings])

  return (
    <Canvas
      shadows
      dpr={[MIN_DPR, Math.min(MAX_DPR, window.devicePixelRatio)]}
      camera={cameraSettings}
      style={{
        height: '100vh',
        width: '100vw',
        touchAction: 'none'
      }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
      performance={{
        min: 0.5,
        max: 1,
        debounce: 200
      }}
    >
      {/* Add cleanup manager */}
      <CleanupManager />

      {/* <Perf position="bottom-right" /> */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        decay={0}
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={DEFAULT_SHADOW_MAP_SIZE}
      />

      {SceneContent}

      <EffectComposer 
        disableNormalPass
        multisampling={0}
      >
        <Bloom
          {...postProcessSettings.bloom}
          kernelSize={KernelSize.MEDIUM}
        />
        <DepthOfField {...postProcessSettings.dof} />
      </EffectComposer>

      <BakeShadows />
    </Canvas>
  )
}

// Preload models and textures with cleanup
// const modelPath = '/path-to-your-model.glb'
// useGLTF.preload(modelPath)

// // Cleanup preloaded models when the app unmounts
// useEffect(() => {
//   return () => {
//     useGLTF.dispose(modelPath)
//   }
// }, [])