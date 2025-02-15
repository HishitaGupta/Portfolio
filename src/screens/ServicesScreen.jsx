// import React, { useState, useEffect, useRef } from 'react';
// import { PerspectiveCamera, Html, Text } from '@react-three/drei';
// import * as dat from 'dat.gui';
// import { Screen } from './Screen';
// import { SpinningBox } from './SpinningBox';
// import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
// import { IoMdClose } from 'react-icons/io';
// import Heading from '../assets/Text.png';
// import Hishita from '../assets/Hishita.jpg';
// import { useFrame } from '@react-three/fiber';
// import Marquee from 'react-fast-marquee';

// export const ServicesScreen = (props) => {
//     const [showHtml, setShowHtml] = useState(false)
//     const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlScale, setHtmlScale] = useState(1)
//     const [textScale, setTextScale] = useState(1)
//     const [textPosition, setTextPosition] = useState({ x: -3.1, y: 3.5, z: 0 })
//     const [textRotation, setTextRotation] = useState({ x: 0, y: 0, z: 0 })

//     const [isTransitioning, setIsTransitioning] = useState(false)


//     const skills = [
//         {
//             name: "C",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
//         },
//         {
//             name: "C++",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
//         },
//         {
//             name: "JavaScript",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//         },
//         {
//             name: "Python",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
//         },
//         {
//             name: "Java",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
//         },
//         {
//             name: "HTML",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
//         },
//         {
//             name: "CSS",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
//         },
//         {
//             name: "React",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//         },
//         {
//             name: "Node.js",
//             imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
//         },
//         // {
//         //   name: "MongoDB",
//         //   imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
//         // },
//     ];

//     // Add event listener for screen changes
//     useEffect(() => {
//         const handleScreenChange = (event) => {
//             if (event.detail.screenName === 'Services') {
//                 setIsTransitioning(true);
//                 setTimeout(() => {
//                     setShowHtml(true);
//                     setIsTransitioning(false);
//                 }, 1000);
//             } else {
//                 setShowHtml(false);
//             }
//         };

//         window.addEventListener('changeScreen', handleScreenChange);
//         return () => window.removeEventListener('changeScreen', handleScreenChange);
//     }, []);
//     // text controls
//     // useEffect(() => { 
//     //     if (!showHtml) {
//     //         const gui = new dat.GUI({ name: 'HTML Controls' });

//     //         const posFolder = gui.addFolder('HTML Position');

//     //         posFolder.add(htmlPosition, 'x', -3, 20, 0.1).onChange((value) => {
//     //             setTextPosition(prev => ({ ...prev, x: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'y', -3, 20, 0.1).onChange((value) => {
//     //             setTextPosition(prev => ({ ...prev, y: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'z', -3, 20, 0.1).onChange((value) => {
//     //             setTextPosition(prev => ({ ...prev, z: value }));
//     //         });

//     //         const rotFolder = gui.addFolder('HTML Rotation');
//     //         rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setTextRotation(prev => ({ ...prev, x: value }));
//     //         });
//     //         rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setTextRotation(prev => ({ ...prev, y: value }));
//     //         });
//     //         rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setTextRotation(prev => ({ ...prev, z: value }));
//     //         });

//     //         const scaleFolder = gui.addFolder('HTML Scale');
//     //         scaleFolder.add({ scale: textScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
//     //             setTextScale(value);
//     //         });

//     //         posFolder.open();
//     //         scaleFolder.open();

//     //         return () => {
//     //             gui.destroy();
//     //         };
//     //     }
//     // }, [!showHtml]);


//     // useEffect(() => {



//     //html controls
//     // useEffect(() => {
//     //     if (showHtml) {
//     //         const gui = new dat.GUI({ name: 'HTML Controls' });

//     //         const posFolder = gui.addFolder('HTML Position');

//     //         posFolder.add(htmlPosition, 'x', -3, 3, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, x: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'y', -3, 3, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, y: value }));
//     //         });
//     //         posFolder.add(htmlPosition, 'z', -3, 3, 0.1).onChange((value) => {
//     //             setHtmlPosition(prev => ({ ...prev, z: value }));
//     //         });

//     //         const rotFolder = gui.addFolder('HTML Rotation');
//     //         rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setHtmlRotation(prev => ({ ...prev, x: value }));
//     //         });
//     //         rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setHtmlRotation(prev => ({ ...prev, y: value }));
//     //         });
//     //         rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
//     //             setHtmlRotation(prev => ({ ...prev, z: value }));
//     //         });

//     //         const scaleFolder = gui.addFolder('HTML Scale');
//     //         scaleFolder.add({ scale: htmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
//     //             setHtmlScale(value);
//     //         });

//     //         posFolder.open();
//     //         scaleFolder.open();

//     //         return () => {
//     //             gui.destroy();
//     //         };
//     //     }
//     // }, [showHtml]);




//     const textRef = useRef()
//     const rand = Math.random() * 10000

//     // useFrame((state) => (textRef.current.position.x = -3.1 + Math.sin(rand + state.clock.elapsedTime / 5) * 8))



//     return (
//         <Screen {...props} onClick={props.onClick}>
//             <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
//             <color attach="background" args={['#6C63FF']} />
//             {showHtml && !isTransitioning ? (
//                 <group>
//                     <Html
//                         transform
//                         scale={props.htmlScale || htmlScale}
//                         position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
//                         rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
//                         style={{
//                             width: '270px',
//                             height: '200px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             // background: 'rgba(255, 255, 255, 0.1)',
//                             backdropFilter: 'blur(8px)',
//                             transformOrigin: 'center',
//                             borderRadius: '10px',
//                             // border: '2px solid white',
//                             mixBlendMode: 'difference',
//                             padding: '8px',
//                         }}
//                     >
//                         <div
//                             style={{
//                                 width: '100%',
//                                 height: '100%',
//                                 backgroundColor: '#C0C0C0',
//                                 border: '1px solid #000',
//                                 fontFamily: 'Tahoma, sans-serif',
//                                 fontSize: '10px',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 padding: '1.5px',
//                             }}
//                         >
//                             {/* Title Bar */}
//                             <div
//                                 style={{
//                                     backgroundColor: '#000080',
//                                     color: '#FFFFFF',
//                                     padding: '1.5px 2px',
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <span
//                                     style={{
//                                         padding: '0',
//                                         fontSize: '6px',
//                                     }}
//                                 >
//                                     C:\Users\Hishita Gupta\Life\SkillsAndTech.txt
//                                 </span>

//                                 {/* Title Bar Buttons */}
//                                 <div
//                                     style={{
//                                         display: 'flex',
//                                         gap: '2px',
//                                     }}
//                                 >
//                                     {/* Minimize Button */}
//                                     <div
//                                         style={{
//                                             width: '10px',
//                                             height: '10px',
//                                             backgroundColor: '#C0C0C0',
//                                             border: '1px solid #808080',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         {/* <div
//                                             style={{
//                                                 width: '6px',
//                                                 height: '1px',
//                                                 backgroundColor: '#000',
//                                             }}
//                                         ></div> */}
//                                         <FaRegWindowMinimize style={{
//                                             width: '6px',
//                                             height: '1px',
//                                             backgroundColor: '#fff',
//                                         }} />
//                                     </div>

//                                     {/* Maximize Button */}
//                                     <div
//                                         style={{
//                                             width: '10px',
//                                             height: '10px',
//                                             backgroundColor: '#C0C0C0',
//                                             border: '1px solid #808080',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             cursor: 'pointer',
//                                         }}
//                                     >
//                                         {/* <div
//                                             style={{
//                                                 width: '6px',
//                                                 height: '6px',
//                                                 border: '1px solid #000',
//                                             }}
//                                         ></div> */}
//                                         <FaRegWindowMaximize
//                                             style={{
//                                                 width: '6px',
//                                                 height: '6px',
//                                                 color: 'black',
//                                                 // backgroundColor: '#000'
//                                             }} />
//                                     </div>

//                                     {/* Close Button */}
//                                     <div
//                                         style={{
//                                             width: '10px',
//                                             height: '10px',
//                                             backgroundColor: '#C0C0C0',
//                                             border: '1px solid #808080',
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             justifyContent: 'center',
//                                             cursor: 'pointer',

//                                         }}
//                                     >
//                                         {/* <div
//                                             style={{
//                                                 width: '6px',
//                                                 height: '6px',
//                                                 backgroundColor: '#FF0000',
//                                             }}
//                                         ></div> */}
//                                         <IoMdClose
//                                             style={{
//                                                 width: '6px',
//                                                 height: '6px',
//                                                 color: '#000000',
//                                                 //  backgroundColor: '#000'
//                                             }}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Menu Bar */}
//                             <div
//                                 style={{
//                                     backgroundColor: '#C0C0C0',
//                                     color: '#000000',
//                                     padding: '1.5px 1px',
//                                     fontSize: '5px',
//                                     display: 'flex',
//                                     gap: '4px',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <span>Me</span>
//                                 <span>Edit</span>
//                                 <span>Search</span>
//                                 <span>Help</span>
//                             </div>

//                             {/* Content Area */}
//                             <div
//                                 style={{
//                                     backgroundColor: '#FFFFFF',
//                                     color: '#000000',
//                                     padding: '10px',
//                                     overflowY: 'scroll', // Enables vertical scrollbar only
//                                     overflowX: 'hidden', // Prevents horizontal scrollbar
//                                     whiteSpace: 'pre-wrap', // Allows text to wrap if necessary
//                                     flexGrow: 1,
//                                     border: '1px solid #808080',
//                                     boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
//                                     height: '300px',
//                                     // scrollbarWidth: 'thin', // Makes scrollbar narrower
//                                     // '&::-webkit-scrollbar': {
//                                     //     width: 'thin' // Makes scrollbar narrower for webkit browsers
//                                     msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
//                                     scrollbarWidth: 'none', // Hide scrollbar for Firefox
//                                     '&::-webkit-scrollbar': { // Hide scrollbar for Chrome/Safari/Opera
//                                         display: 'none'
//                                     },
//                                     display: 'flex', gap: '10px',
//                                     flexDirection: 'column'
//                                 }}
//                             >
//                                 <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
//                                     <div style={{ border: '1px solid #000', width: '100%', padding: '2px', gap: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                                         <p class="bungee-regular" style={{ fontSize: '10px', marginBottom: '1px', padding: '0px' }}>Tech Stack</p>
//                                         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                                             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center', justifyContent: 'start', padding: '2px' ,overflow:'hidden'}}>
//                                                 {/* <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" alt="TypeScript" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" alt="FastAPI" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" alt="Three.js" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" style={{ width: '20px', height: '20px' }} />

//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Vercel_logo_black.svg" alt="Vercel" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" alt="GitHub Actions" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Docker_%28container_engine%29_logo.svg" alt="Docker" style={{ width: '20px', height: '20px' }} />
//                                                 <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" alt="Arduino" style={{ width: '20px', height: '20px' }} /> */}

//                                                 <Marquee autoFill='true' pauseOnHover='true' style={{
//                                                     overflow: 'hidden',
//                                                     msOverflowStyle: 'none', // For Internet Explorer and Edge
//                                                     scrollbarWidth: 'none',
                                                   
//                                                 }}>
//                                                     {skills.map((skill) => (



//                                                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2px' }}>
//                                                             <img src={skill.imageUrl}
//                                                                 alt={skill.name}
//                                                                 style={{
//                                                                     width: '20px',
//                                                                     height: '20px'
//                                                                 }} />
//                                                         </div>
//                                                     ))}
//                                                 </Marquee >

//                                             </div>
//                                         </div>



//                                     </div>

//                                 </div>


//                                 <div style={{ width: '100%', display: 'flex', gap: '10px' }}>
//                                     <div style={{ border: '1px solid #000', width: '50%', height: '40px', display: 'flex', alignContent: 'space-between', justifyContent: 'center', flexDirection: 'column',gap:'3px' }}>
//                                         <p class="bungee-regular" style={{ fontSize: '8px', margin: '1px', padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>LinkedIn </p>
//                                         <p class="cousine-regular" style={{ fontSize: '20px', margin: '1px', padding: '0px', display: 'flex', alignItems: 'end', justifyContent: 'center', height: '50%' }}>1K+</p>
//                                     </div>
//                                     <div style={{ border: '1px solid #000', width: '50%', height: '40px', display: 'flex', alignContent: 'space-between', justifyContent: 'center', flexDirection: 'column',gap:'3px' }}>
//                                         <p class="bungee-regular" style={{ fontSize: '8px', margin: '1px', padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>Current CGPA</p>
//                                         <p class="cousine-regular" style={{ fontSize: '20px', margin: '1px', padding: '0px', display: 'flex', alignItems: 'end', justifyContent: 'center', height: '50%' }}>10</p>
//                                     </div>
//                                 </div>
//                                 <div style={{ display: 'flex', gap: '10px', width: '73%', height: '73%' }}>

//                                     {/* <img src="https://github-readme-stats.vercel.app/api?username=HishitaGupta&theme=transparent&hide_border=false&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000"
//                                         alt="GitHub Streak"
//                                         style={{  display: 'flex',justifyContent:'start',alignItems:'start',border:'1px solid #000' , width: '67%'}}/> */}

//                                     <object data="https://github-readme-stats.vercel.app/api?username=HishitaGupta&theme=transparent&hide_border=false&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000&rank_icon=github" type="image/svg+xml" style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', border: '1px solid #000' }} class='header' ></object>


//                                 </div>



//                                 <div style={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', height: '100%', border: '1px solid #000' }}>


//                                     <object data="https://github-readme-stats.vercel.app/api/top-langs/?username=HishitaGupta&layout=donut&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000" type="image/svg+xml" style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', width: '90%', height: '90%', fontFamily: 'teko' }}  ></object>

//                                 </div>

//                                 <div style={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'start', height: '100%', border: '1px solid #000' }}>


//                                     <object data="https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs&layout=compact&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000" type="image/svg+xml" style={{ display: 'flex', justifyContent: 'start', alignItems: 'start', width: '100%', height: '100%', fontFamily: 'teko' }}  ></object>

//                                 </div>




//                             </div>
//                         </div>
//                     </Html>
//                 </group>
//             ) : (
//                 <>
//                     <ambientLight intensity={Math.PI / 2} />
//                     <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
//                     <pointLight decay={0} position={[-10, -10, -10]} />
//                     <Text fontSize={0.4} letterSpacing={-0.1} color='black'
//                         scale={props.textScale}
//                         position={[textPosition.x, textPosition.y, textPosition.z]}
//                         rotation={[textRotation.x, textRotation.y, textRotation.z]} font="/Inter-Medium.woff" ref={textRef}>
//                         Skills & Tech
//                     </Text>
//                     {/* <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} /> */}
//                 </>
//             )}
//         </Screen>
//     )
// }


import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html, Text } from '@react-three/drei';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Marquee from 'react-fast-marquee';
import { Screen } from './Screen'; // Make sure this import exists
import * as dat from 'dat.gui';

const SKILLS = [
            {
                name: "C",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
            },
            {
                name: "C++",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
            },
            {
                name: "JavaScript",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            },
            {
                name: "Python",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            },
            {
                name: "Java",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
            },
            {
                name: "HTML",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
            },
            {
                name: "CSS",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
            },
            {
                name: "React",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            },
            {
                name: "Node.js",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
            },
            // {
            //   name: "MongoDB",
            //   imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg",
            // },
        ];

// Styles
const styles = {
  windowContainer: {
    width: '270px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
    transformOrigin: 'center',
    borderRadius: '10px',
    mixBlendMode: 'difference',
    padding: '8px',
  },
  titleBar: {
    backgroundColor: '#000080',
    color: '#FFFFFF',
    padding: '1.5px 2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '10px',
    height: '10px',
    backgroundColor: '#C0C0C0',
    border: '1px solid #808080',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  content: {
    backgroundColor: '#FFFFFF',
    padding: '10px',
    flexGrow: 1,
    border: '1px solid #808080',
    overflowY: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  }
};

// Functional Components
const WindowControls = React.memo(() => (
  <div style={{ display: 'flex', gap: '2px' }}>
    <div style={styles.button}>
      <FaRegWindowMinimize style={{ width: '6px', height: '1px' }} />
    </div>
    <div style={styles.button}>
      <FaRegWindowMaximize style={{ width: '6px', height: '6px' }} />
    </div>
    <div style={styles.button}>
      <IoMdClose style={{ width: '6px', height: '6px' }} />
    </div>
  </div>
));

const TitleBar = React.memo(() => (
  <div style={styles.titleBar}>
    <span style={{ fontSize: '6px' }}>
      C:\Users\Hishita Gupta\Life\SkillsAndTech.txt
    </span>
    <WindowControls />
  </div>
));

const MenuBar = React.memo(() => (
  <div style={{
    backgroundColor: '#C0C0C0',
    padding: '1.5px 1px',
    fontSize: '5px',
    display: 'flex',
    gap: '4px'
  }}>
    {['File', 'Edit', 'View', 'Help'].map(item => (
      <span key={item}>{item}</span>
    ))}
  </div>
));

const TechStack = React.memo(({ skills }) => (
  <div style={{ border: '1px solid #000', padding: '2px' }}>
    <p style={{ fontSize: '10px', marginBottom: '1px',color:'black' }} class='teko'>Tech Stack</p>
    <Marquee autoFill pauseOnHover>
      {skills.map((skill) => (
        <div key={skill.name} style={{ margin: '2px' }}>
          <img
            src={skill.imageUrl}
            alt={skill.name}
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      ))}
    </Marquee>
  </div>
));

const StatsCard = React.memo(({ title, value }) => (
  <div style={{
    border: '1px solid #000',
    width: '50%',
    padding: '5px',
    textAlign: 'center'
  }}>
    <p style={{ fontSize: '8px', margin: '1px' }}>{title}</p>
    <p style={{ fontSize: '20px', margin: '1px' }}>{value}</p>
  </div>
));

const GitHubStats = React.memo(() => (
    <>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        width: '73%', 
        height: '73%',
        marginTop: '10px'
      }}>
        <object
          data="https://github-readme-stats.vercel.app/api?username=HishitaGupta&theme=transparent&hide_border=false&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000&rank_icon=github"
          type="image/svg+xml"
          style={{ 
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            border: '1px solid #000',
            width: '100%'
          }}
        />
      </div>
  
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        height: '100%',
        border: '1px solid #000',
        marginTop: '10px'
      }}>
        <object
          data="https://github-readme-stats.vercel.app/api/top-langs/?username=HishitaGupta&layout=donut&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000"
          type="image/svg+xml"
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            width: '90%',
            height: '90%',
            fontFamily: 'teko'
          }}
        />
      </div>
  
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        height: '100%',
        border: '1px solid #000',
        marginTop: '10px'
      }}>
        <object
          data="https://github-readme-stats.vercel.app/api/wakatime?username=ffflabs&layout=compact&theme=transparent&hide_border=true&title_color=000000&text_color=000000&icon_color=000000&text_bold=true&ring_color=000000"
          type="image/svg+xml"
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            width: '100%',
            height: '100%',
            fontFamily: 'teko'
          }}
        />
      </div>
    </>
  ));

export const ServicesScreen = ({ htmlScale = 1, htmlPos = [0, 0, 0], htmlRot = [0, 0, 0], ...props }) => {
  const [showHtml, setShowHtml] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 });
  const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 });
  const [localHtmlScale, setLocalHtmlScale] = useState(1);


  const isMobile = window.innerWidth <= 768;

  // Add GUI controls when showHtml is true
  // useEffect(() => {
  //   if (showHtml) {
  //     const gui = new dat.GUI({ name: 'HTML Controls' });

  //     const posFolder = gui.addFolder('HTML Position');
  //     posFolder.add(htmlPosition, 'x', -3, 20, 0.1).onChange((value) => {
  //       setHtmlPosition(prev => ({ ...prev, x: value }));
  //     });
  //     posFolder.add(htmlPosition, 'y', -3, 20, 0.1).onChange((value) => {
  //       setHtmlPosition(prev => ({ ...prev, y: value }));
  //     });
  //     posFolder.add(htmlPosition, 'z', -3, 20, 0.1).onChange((value) => {
  //       setHtmlPosition(prev => ({ ...prev, z: value }));
  //     });

  //     const rotFolder = gui.addFolder('HTML Rotation');
  //     rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
  //       setHtmlRotation(prev => ({ ...prev, x: value }));
  //     });
  //     rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
  //       setHtmlRotation(prev => ({ ...prev, y: value }));
  //     });
  //     rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
  //       setHtmlRotation(prev => ({ ...prev, z: value }));
  //     });

  //     const scaleFolder = gui.addFolder('HTML Scale');
  //     scaleFolder.add({ scale: localHtmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
  //       setLocalHtmlScale(value);
  //     });

  //     posFolder.open();
  //     rotFolder.open();
  //     scaleFolder.open();

  //     return () => {
  //       gui.destroy();
  //     };
  //   }
  // }, [showHtml]);

  useEffect(() => {
    const handleScreenChange = (event) => {
      if (event.detail.screenName === 'Services') {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
          setShowHtml(true);
          setIsTransitioning(false);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setShowHtml(false);
      }
    };

    window.addEventListener('changeScreen', handleScreenChange);
    return () => window.removeEventListener('changeScreen', handleScreenChange);
  }, []);

  const content = showHtml && !isTransitioning ? (
    <Html
      transform
      scale={isMobile ? props.mobileHtmlScale : (props.htmlScale )}
        position={isMobile  ? props.mobileHtmlPos : (props.htmlPos )}
          rotation={isMobile  ? props.mobileHtmlRot : (props.htmlRot )}
      style={styles.windowContainer}
    >
      <div style={{ 
        width: '100%',
        height: '100%',
        backgroundColor: '#C0C0C0',
        border: '1px solid #000',
        fontFamily: 'Tahoma, sans-serif',
        fontSize: '10px',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5px',
      }}>
        <TitleBar />
        <MenuBar />
        <div style={styles.content}>
          <TechStack skills={SKILLS} />
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <StatsCard title="LinkedIn" value="1K+" />
            <StatsCard title="Current CGPA" value="10" />
          </div>
          <GitHubStats />
        </div>
      </div>
    </Html>
  ) : (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <pointLight position={[10, 10, 10]} intensity={Math.PI} />
      <Text
        fontSize={0.4}
        letterSpacing={-0.1}
        color="black"
        position={[-3.1, 3.5, 0]}
        font="/Inter-Medium.woff"
      >
        Skills & Tech
      </Text>
    </>
  );

  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['#6C63FF']} />
      {content}
    </Screen>
  );
};
