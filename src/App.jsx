import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from './Computers'
// import { useFrame } from "@react-three/fiber";
import * as easingnew from "maath/easing";

const suzi = import('@pmndrs/assets/models/bunny.glb')

export default function App() {
  
  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 45, near: 1, far: 20 }} eventSource={document.getElementById('root')} eventPrefix="client">
      
      {/* Lights */}
      <color attach="background" args={['black']} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      {/* Main scene */}
      <group position={[0, -1, 1]}>

        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
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
        {/* Bunny and a light give it more realism */}
        {/* <Bun scale={0.4} position={[0, 0.3, 0.5]} rotation={[0, -Math.PI * 0.85, 0]} />
        <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" /> */}
      </group>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={2} />
        <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={1} height={700} />
      </EffectComposer>
      {/* Camera movements */}
      {/* <CameraRig /> */}
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
      <axesHelper args={[5]} />
      {/* <OrbitControls/> */}

    </Canvas>
  )
}

function Bun(props) {
  const { nodes } = useGLTF(suspend(suzi).default)
  console.log(nodes)
  return (
    <mesh receiveShadow castShadow geometry={nodes.mesh.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  )
}

// function CameraRig() {
//   useFrame((state, delta) => {
//     easing.damp3(state.camera.position, [-1 + (state.pointer.x * state.viewport.width) / 3, (1 + state.pointer.y) / 2, 5.5], 0.5, delta)
//     state.camera.lookAt(0, 0, 0)
//   })

// }


// import { useFrame } from "@react-three/fiber";
// import * as easing from "maath/easing";

function CameraRig() {
  let idleTime = 0; // Counter for idle time
  const idleThreshold = 1; // Time (in seconds) to wait before recentering

  useFrame((state, delta) => {
    const { pointer, viewport, camera } = state;

    // Calculate camera target position based on pointer movement
    const targetPosition = [
      (pointer.x * viewport.width) / 3,
      pointer.y / 2,
      4.5, // Fixed Z-axis
    ];

    if (Math.abs(pointer.x) > 0.01 || Math.abs(pointer.y) > 0.01) {
      // Reset idle time if pointer is moving
      idleTime = 0;
    } else {
      // Increment idle time when pointer is stationary
      idleTime += delta;
    }

    // Determine final position for the camera
    const finalPosition =
      idleTime >= idleThreshold
        ? [0, 0, 4.5] // Return to center position if idle
        : targetPosition;

    // Smoothly transition camera position
    easingnew.damp3(camera.position, finalPosition, 0.5, delta);

    // Ensure the camera always looks at the center of the scene
    camera.lookAt(0, 0, 0);
  });
}


