// import { useRef, useEffect } from 'react'
// import { useGLTF } from '@react-three/drei'
// import * as dat from 'dat.gui'

// function Telephone(props) {
//   const groupRef = useRef()
//   const { nodes, materials } = useGLTF('/landline_phone.glb')
//   useEffect(() => {
//     console.log(nodes)
//   }, [nodes])

//   useEffect(() => {
//     if (groupRef.current) {
//       const gui = new dat.GUI();
//       const telephoneFolder = gui.addFolder('Telephone');
      
//       telephoneFolder.add(groupRef.current.position, 'x', -5, 5, 0.1).name('Position X');
//       telephoneFolder.add(groupRef.current.position, 'y', -5, 5, 0.1).name('Position Y'); 
//       telephoneFolder.add(groupRef.current.position, 'z', -5, 5, 0.1).name('Position Z');

//       telephoneFolder.add(groupRef.current.rotation, 'x', -Math.PI, Math.PI, 0.1).name('Rotation X');
//       telephoneFolder.add(groupRef.current.rotation, 'y', -Math.PI, Math.PI, 0.1).name('Rotation Y');
//       telephoneFolder.add(groupRef.current.rotation, 'z', -Math.PI, Math.PI, 0.1).name('Rotation Z');

//       telephoneFolder.add(groupRef.current.scale, 'x', 0.1, 2, 0.1).name('Scale X');
//       telephoneFolder.add(groupRef.current.scale, 'y', 0.1, 2, 0.1).name('Scale Y');
//       telephoneFolder.add(groupRef.current.scale, 'z', 0.1, 2, 0.1).name('Scale Z');

//       telephoneFolder.open();

//       return () => gui.destroy();
//     }
//   }, []);

//   return (
//     <group ref={groupRef} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
//           <group
//             name="cdcf7ac8e07d4c23be3953b14a3746ddfbx"
//             rotation={[Math.PI / 2, 0, 0]}
//             scale={0.01}>
//             <group name="RootNode">
//               <group name="Landline_Low" position={[11.012, 0.505, -15.864]} scale={100}>
//                 <mesh
//                   name="Landline_Low_Landline_Phone_0"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Landline_Low_Landline_Phone_0.geometry}
//                   material={materials.Landline_Phone}
//                 />
//                 <mesh
//                   name="Landline_Low_Landline_Phone_0_1"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Landline_Low_Landline_Phone_0_1.geometry}
//                   material={materials.Landline_Phone}
//                 />
//                 <mesh
//                   name="Landline_Low_Landline_Phone_0_2"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Landline_Low_Landline_Phone_0_2.geometry}
//                   material={materials.Landline_Phone}
//                 />
//                 <mesh
//                   name="Landline_Low_Landline_Phone_0_3"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.Landline_Low_Landline_Phone_0_3.geometry}
//                   material={materials.Landline_Phone}
//                 />
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

// export default Telephone



/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Shayan (https://sketchfab.com/mshayan02)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/futuristic-flying-animated-robot-low-poly-c5b92c281dc444448e64c0607719c7a2
Title: Futuristic flying animated Robot - Low Poly
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as dat from 'dat.gui'

export function Robot(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(
    '/futuristic_flying_animated_robot_-_low_poly.glb'
  )
  const { actions } = useAnimations(animations, group)
  const { camera } = useThree()

  // useEffect(() => {
  //   // Play all animations
  //   Object.values(actions).forEach(action => {
  //     action.play()
  //   })
  // }, [actions])

//   useEffect(() => {
//     const gui = new dat.GUI()

//     // Model controls
//     const modelFolder = gui.addFolder('Robot Model')
    
//     // Position controls
//     modelFolder.add(group.current.position, 'x', -10, 10, 0.1).name('Position X')
//     modelFolder.add(group.current.position, 'y', -10, 10, 0.1).name('Position Y')
//     modelFolder.add(group.current.position, 'z', -10, 10, 0.1).name('Position Z')

//     // Rotation controls
//     modelFolder.add(group.current.rotation, 'x', -Math.PI, Math.PI, 0.1).name('Rotation X')
//     modelFolder.add(group.current.rotation, 'y', -Math.PI, Math.PI, 0.1).name('Rotation Y')
//     modelFolder.add(group.current.rotation, 'z', -Math.PI, Math.PI, 0.1).name('Rotation Z')

//     // Scale controls
//     const scale = { value: 1 }
//     modelFolder.add(scale, 'value', 0.1, 5, 0.1)
//       .name('Scale')
//       .onChange((value) => {
//         group.current.scale.set(value, value, value)
//       })

//     // Camera controls
//     const cameraFolder = gui.addFolder('Camera')
    
//     cameraFolder.add(camera.position, 'x', -10, 10, 0.1).name('Camera X')
//     cameraFolder.add(camera.position, 'y', -10, 10, 0.1).name('Camera Y')
//     cameraFolder.add(camera.position, 'z', -10, 10, 0.1).name('Camera Z')

//     cameraFolder.add(camera.rotation, 'x', -Math.PI, Math.PI, 0.1).name('Camera Rotation X')
//     cameraFolder.add(camera.rotation, 'y', -Math.PI, Math.PI, 0.1).name('Camera Rotation Y')
//     cameraFolder.add(camera.rotation, 'z', -Math.PI, Math.PI, 0.1).name('Camera Rotation Z')

//     cameraFolder.add(camera, 'fov', 10, 120).name('FOV').onChange(() => {
//       camera.updateProjectionMatrix()
//     })

//     modelFolder.open()
//     cameraFolder.open()

//     return () => {
//       gui.destroy()
//     }
//   }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
      {/* <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.246}>
          <group
            name="a45b6f53b9cc462a82863bb5898bf730fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Robot_Origin"
                  position={[0, 9.763, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Robot" position={[0, 0, 0.051]}>
                    <mesh
                      name="Robot_White_Glossy_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Robot_White_Glossy_0.geometry}
                      material={materials.White_Glossy}
                    />
                    <mesh
                      name="Robot_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Robot_Blue_Light_0.geometry}
                      material={materials.Blue_Light}
                    />
                    <mesh
                      name="Robot_Black_Matt_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Robot_Black_Matt_0.geometry}
                      material={materials.Black_Matt}
                    />
                  </group>
                  <group name="Mouth" position={[0, -0.504, 2.573]} scale={[1, 1, 2.881]}>
                    <mesh
                      name="Mouth_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Mouth_Blue_Light_0.geometry}
                      material={materials.Blue_Light}
                    />
                  </group>
                  <group name="Wave" position={[0, 0, 0.113]} scale={[1, 1, 0.186]}>
                    <mesh
                      name="Wave_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wave_Blue_Light_0.geometry}
                      material={materials.Blue_Light}
                    />
                  </group>
                  <group name="Wave002" position={[0, 0, 0.879]} scale={[1, 1, 0.889]}>
                    <mesh
                      name="Wave002_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wave002_Blue_Light_0.geometry}
                      material={materials.Blue_Light}
                    />
                  </group>
                  <group name="Wave001" position={[0, 0, -0.089]} scale={[1, 1, 0.001]}>
                    <mesh
                      name="Wave001_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wave001_Blue_Light_0.geometry}
                      material={materials.Blue_Light}
                    />
                  </group>
                  <group name="Wave003" position={[0, 0, 0.511]} scale={[1, 1, 0.552]}>
                    <mesh
                      name="Wave003_Blue_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wave003_Blue_Light_0.geometry}
                      material={materials.Blue_Light}
                    />
                  </group>
                  <group name="Waves" position={[0, 0, 1]} scale={[1, 1, 0.747]} />
                  <group name="Ears" position={[0, 0, 2.967]}>
                    <mesh
                      name="Ears_Black_Matt_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Ears_Black_Matt_0.geometry}
                      material={materials.Black_Matt}
                    />
                  </group>
                  <group name="Empty" position={[0, -0.06, 2.786]}>
                    <group name="Eyes" position={[0, -0.431, 0.076]}>
                      <mesh
                        name="Eyes_Blue_Light_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Eyes_Blue_Light_0.geometry}
                        material={materials.Blue_Light}
                      />
                    </group>
                  </group>
                  <group name="Hand_origin" position={[0.723, 0, 2.015]} rotation={[0, -0.064, 0]}>
                    <group name="hANDS" position={[-0.723, 0, -1.963]}>
                      <mesh
                        name="hANDS_White_Glossy_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.hANDS_White_Glossy_0.geometry}
                        material={materials.White_Glossy}
                      />
                    </group>
                  </group>
                  <group
                    name="Hand_origin002"
                    position={[-0.723, 0, 2.015]}
                    rotation={[0, 0.064, -Math.PI]}>
                    <group name="hANDS002" position={[-0.723, 0, -1.963]}>
                      <mesh
                        name="hANDS002_White_Glossy_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.hANDS002_White_Glossy_0.geometry}
                        material={materials.White_Glossy}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group> */}
      {/* <OrbitControls/> */}
    </group>
  )
}

// useGLTF.preload('/futuristic_flying_animated_robot_-_low_poly.glb')

export default Robot
