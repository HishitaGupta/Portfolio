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


function Telephone(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/landline_phone.glb')
  useEffect(() => {
    console.log(nodes)
  }, [nodes])

  useEffect(() => {
    if (groupRef.current) {
      const gui = new dat.GUI();
      const telephoneFolder = gui.addFolder('Telephone');
      
      telephoneFolder.add(groupRef.current.position, 'x', -5, 5, 0.1).name('Position X');
      telephoneFolder.add(groupRef.current.position, 'y', -5, 5, 0.1).name('Position Y'); 
      telephoneFolder.add(groupRef.current.position, 'z', -5, 5, 0.1).name('Position Z');

      telephoneFolder.add(groupRef.current.rotation, 'x', -Math.PI, Math.PI, 0.1).name('Rotation X');
      telephoneFolder.add(groupRef.current.rotation, 'y', -Math.PI, Math.PI, 0.1).name('Rotation Y');
      telephoneFolder.add(groupRef.current.rotation, 'z', -Math.PI, Math.PI, 0.1).name('Rotation Z');

      telephoneFolder.add(groupRef.current.scale, 'x', 0.1, 2, 0.1).name('Scale X');
      telephoneFolder.add(groupRef.current.scale, 'y', 0.1, 2, 0.1).name('Scale Y');
      telephoneFolder.add(groupRef.current.scale, 'z', 0.1, 2, 0.1).name('Scale Z');

      telephoneFolder.open();

      return () => gui.destroy();
    }
  }, []);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="cdcf7ac8e07d4c23be3953b14a3746ddfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="RootNode">
              <group name="Landline_Low" position={[11.012, 0.505, -15.864]} scale={100}>
                <mesh
                  name="Landline_Low_Landline_Phone_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Landline_Low_Landline_Phone_0.geometry}
                  material={materials.Landline_Phone}
                />
                <mesh
                  name="Landline_Low_Landline_Phone_0_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Landline_Low_Landline_Phone_0_1.geometry}
                  material={materials.Landline_Phone}
                />
                <mesh
                  name="Landline_Low_Landline_Phone_0_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Landline_Low_Landline_Phone_0_2.geometry}
                  material={materials.Landline_Phone}
                />
                <mesh
                  name="Landline_Low_Landline_Phone_0_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Landline_Low_Landline_Phone_0_3.geometry}
                  material={materials.Landline_Phone}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

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


        <Telephone 
          position={[0.1, 0, 0]}
          scale={2}
          rotation={[0, 3.1, 0]}
        />
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
      <axesHelper args={[5]} />
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
