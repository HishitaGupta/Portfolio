// import React, { useState, useEffect } from 'react';
// import { PerspectiveCamera, Html, Text } from '@react-three/drei';
// import * as dat from 'dat.gui';
// import { Screen } from './Screen';
// import { SpinningBox } from './SpinningBox';
// import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
// import { IoMdClose } from 'react-icons/io';
// import Heading from '../assets/Text.png';
// import Hishita from '../assets/Hishita.jpg';


// export const HobbiesScreen = (props) => {
//     const [showHtml, setShowHtml] = useState(false)
//     const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlScale, setHtmlScale] = useState(1)
//     const [textScale, setTextScale] = useState(1)
//     const [textPosition, setTextPosition] = useState({ x: -0.1, y: 3.5, z: 0 })
//     const [textRotation, setTextRotation] = useState({ x: 0, y: 0, z: 0 })
//     const [isTransitioning, setIsTransitioning] = useState(false)



//     // Add event listener for screen changes
//     useEffect(() => {
//         const handleScreenChange = (event) => {
//             if (event.detail.screenName === 'Hobbies') {
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


    


//     const handleScreenClick = (e) => {
//         if (!isTransitioning) {
//             setIsTransitioning(true);
//             if (props.onClick) {
//                 props.onClick(e);
//                 // Wait for camera animation to complete before showing HTML
//                 setTimeout(() => {
//                     setShowHtml(true);
//                     setIsTransitioning(false);
//                 }, 1000); // Yes, this is one second (1000 milliseconds)
//             }
//         }
//     };

//     return (
//         <Screen {...props} onClick={handleScreenClick}>
//             <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
//             <color attach="background" args={['#3B82F6']} />
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
//                                     C:\Users\Hishita Gupta\Life\About.txt
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
//                                     padding: '5px',
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
//                                     }
//                                 }}
//                             >
//                                 <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                                     <div style={{
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         height: '150px',
//                                         width: '100%',
//                                         border: '0.5px solid #000'
//                                     }}>
//                                         <img src={Heading} alt="" style={{ width: '100%', height: '100%' }} />
//                                     </div>

//                                     <div style={{
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',

//                                         width: '100%',
//                                         // border: '1px solid #000',
//                                         gap: '10px',
//                                         height: '150px',
//                                     }}>
//                                         <div style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             border: '0.5px solid #000',
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             gap: '0px'
//                                         }}>

//                                             <div style={{
//                                                 width: '100%',
//                                                 height: '80%',
//                                                 // padding: '2px',
//                                                 // border: '1px solid #000'
//                                             }}>
//                                                 <img src={Hishita} alt="" style={{ width: '100%', height: '100%' }} />

//                                             </div>
//                                             <div style={{
//                                                 width: '100%',
//                                                 height: '20%',
//                                                 borderTop: '0.5px solid #000',
//                                                 padding: '3px',
//                                             }} >
//                                                 <p class="bungee-regular" style={{ fontSize: '8px', margin: '0px', padding: '0px' }}>Fun Facts</p>
//                                                 <p class="cousine-regular" style={{ fontSize: '5.5px', margin: '0px', padding: '0px' }}>I can solve a Rubik's cube in under 2 minutes!</p>
//                                             </div>

//                                         </div>
//                                         <div style={{
//                                             width: '100%',
//                                             height: '100%',
//                                             border: '0.5px solid #000',
//                                             padding: '3px',
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             gap: '2px',
//                                             overflowY: 'scroll',
//                                             overflowX: 'hidden',
//                                             whiteSpace: 'pre-wrap',
//                                             flexGrow: 1,
//                                             msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
//                                             scrollbarWidth: 'none', // Hide scrollbar for Firefox
//                                             '&::-webkit-scrollbar': { // Hide scrollbar for Chrome/Safari/Opera
//                                                 display: 'none'
//                                             },
//                                         }}>
//                                             <p class="cousine-bold" style={{ fontSize: '8px', padding: '2px', textAlign: 'center', margin: '0px', paddingTop: '0px' }}>Master of controlled chaos</p>
//                                             <p class="cousine-regular" style={{ fontSize: '6px', margin: '0px', padding: '0px' }}>24 years old
//                                             </p>
//                                             <p class="cousine-regular" style={{ fontSize: '6px', margin: '0px', padding: '0px' }}>Greater Philadelphia, USA
//                                             </p>
//                                             <p class="cousine-regular" style={{ fontSize: '5.5px', marginTop: '2px', padding: '0px' }}>I have been drawing and creating since I was physically capable of grasping a pencil. From the age of 12, I began indulging in digital illustration.​ I decided to pursue my passion in design graduated in 2017 at the top of my class with an Associate's Degree in Interactive Design.
//                                                 <br />To quench my hunger for web development knowledge, I kickstarted my web design journey in 2020 and haven't looked back. In my free time, I love to learn new tools and technologies to make far-out websites and help bring others' visions to life. I also like to sprinkle a little rollerskating & anime in between.


//                                             </p>
//                                         </div>

//                                     </div>

//                                     {/* <div style={
//                                         {
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             width: '100%',
//                                             border: '0.5px solid #000',
//                                             gap: '0px',
//                                             height: '80px',
//                                             padding: '2px'
//                                         }}>
//                                         <p class="bungee-regular" style={{ fontSize: '8px', margin: '0px', padding: '0px' }}>Education</p>
//                                         <div style={{
//                                             display: 'flex',
//                                             justifyContent: 'space-between',
//                                             alignItems: 'center',
//                                             width: '100%',
//                                             padding: '0px 2px'
//                                         }}>
//                                             {/* timeline 
//                                             <div style={{ width: '40%', height: '0.1px', padding: '0px ', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
//                                                 <div style={{ position: 'absolute', left: '-2px', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: 'black' }}></div>
//                                             </div>
//                                             <p class="cousine-regular" style={{ fontSize: '6px', margin: '0px', padding: '0px' }}>
//                                                 2020-2021</p>
//                                             <div style={{ width: '40%', height: '0.1px', padding: '0px ', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
//                                                 <div style={{ position: 'absolute', right: '-1px', width: '2px', height: '2px', borderRadius: '50%', backgroundColor: 'black' }}></div>
//                                             </div>
//                                         </div>
//                                         <div style={
//                                             {
//                                                 display: 'flex',
//                                                 // flexDirection: 'column',
//                                                 width: '100%',
//                                                 // border: '0.5px solid #000',
//                                                 gap: '10px',
//                                                 // height: '80px',
//                                                 padding: '2px'
//                                             }}>
//                                             <div style={
//                                                 {
//                                                     display: 'flex',
//                                                     flexDirection: 'column',
//                                                     width: '60%',
//                                                     border: '0.5px solid #000',
//                                                     gap: '0px',
//                                                     // height: '80px',
//                                                     padding: '2px'
//                                                 }}>
//                                                 <p class="cousine-bold" style={{ fontSize: '6px', margin: '0px', padding: '0px' }}>Primary to Senior Secondary</p>
//                                                 <p class="cousine-regular" style={{ fontSize: '5px', margin: '0px', padding: '2px' }}>
//                                                     <ul>
//                                                         <li>Mukat Public School,Rajpura</li>
//                                                         <li>Central Board of Secondary Education</li>
//                                                         <li>Top Academic Achiever</li>
//                                                         <li>10th Grade: 95%</li>
//                                                         <li>12th Grade: 96%</li>
//                                                     </ul>
//                                                 </p>
//                                             </div>
//                                             <div style={
//                                                 {
//                                                     display: 'flex',
//                                                     // flexDirection: 'column',
//                                                     width: '50%',
//                                                     border: '0.5px solid #000',
//                                                     gap: '0px',
//                                                     // height: '80px',
//                                                     padding: '2px'
//                                                 }}>
//                                                 Hello
//                                             </div>

//                                         </div>

//                                     </div> */}
//                                 </section>
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
//                         rotation={[textRotation.x, textRotation.y, textRotation.z]} font="/Inter-Medium.woff">
//                         About Me
//                     </Text>
//                     {/* <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} /> */}
//                 </>
//             )}
//         </Screen>
//     )
// }


import React, { useState, useEffect, useCallback } from 'react';
import { PerspectiveCamera, Html, Text } from '@react-three/drei';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Heading from '../assets/Text.png';
import Hishita from '../assets/Hishita.jpg';
import { Screen } from './Screen';

export const HobbiesScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [htmlPosition] = useState({ x: 0, y: 0, z: 0 });
    const [htmlRotation] = useState({ x: 0, y: 0, z: 0 });
    const [textPosition] = useState({ x: -0.1, y: 3.5, z: 0 });
    const [textRotation] = useState({ x: 0, y: 0, z: 0 });

    const handleScreenChange = useCallback((event) => {
        if (event.detail.screenName === 'Hobbies') {
            setIsTransitioning(true);
            setTimeout(() => {
                setShowHtml(true);
                setIsTransitioning(false);
            }, 1000);
        } else {
            setShowHtml(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('changeScreen', handleScreenChange);
        return () => window.removeEventListener('changeScreen', handleScreenChange);
    }, [handleScreenChange]);

    const handleScreenClick = useCallback((e) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            if (props.onClick) {
                props.onClick(e);
                setTimeout(() => {
                    setShowHtml(true);
                    setIsTransitioning(false);
                }, 1000);
            }
        }
    }, [isTransitioning, props]);

    const WindowContent = useCallback(() => (
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
            {/* Title Bar */}
            <div style={{
                backgroundColor: '#000080',
                color: '#FFFFFF',
                padding: '1.5px 2px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <span style={{ padding: '0', fontSize: '6px' }}>
                    C:\Users\Hishita Gupta\Life\About.txt
                </span>
                <div style={{ display: 'flex', gap: '2px' }}>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#C0C0C0',
                        border: '1px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}>
                        <FaRegWindowMinimize style={{
                            width: '6px',
                            height: '1px',
                            backgroundColor: '#fff',
                        }} />
                    </div>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#C0C0C0',
                        border: '1px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}>
                        <FaRegWindowMaximize style={{
                            width: '6px',
                            height: '6px',
                            color: 'black',
                        }} />
                    </div>
                    <div style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#C0C0C0',
                        border: '1px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}>
                        <IoMdClose style={{
                            width: '6px',
                            height: '6px',
                            color: '#000000',
                        }} />
                    </div>
                </div>
            </div>

            {/* Menu Bar */}
            <div style={{
                backgroundColor: '#C0C0C0',
                color: '#000000',
                padding: '1.5px 1px',
                fontSize: '5px',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
            }}>
                <span>Me</span>
                <span>Edit</span>
                <span>Search</span>
                <span>Help</span>
            </div>

            {/* Content Area */}
            <div style={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                padding: '5px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                whiteSpace: 'pre-wrap',
                flexGrow: 1,
                border: '1px solid #808080',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
                height: '300px',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }}>
                <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '150px',
                        width: '100%',
                        border: '0.5px solid #000'
                    }}>
                        <img src={Heading} alt="" style={{ width: '100%', height: '100%' }} loading="lazy" />
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        gap: '10px',
                        height: '150px',
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            border: '0.5px solid #000',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0px'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '80%',
                            }}>
                                <img src={Hishita} alt="" style={{ width: '100%', height: '100%' }} loading="lazy" />
                            </div>
                            <div style={{
                                width: '100%',
                                height: '20%',
                                borderTop: '0.5px solid #000',
                                padding: '3px',
                            }}>
                                <p className="bungee-regular" style={{ fontSize: '8px', margin: '0px', padding: '0px' }}>Fun Facts</p>
                                <p className="cousine-regular" style={{ fontSize: '5.5px', margin: '0px', padding: '0px' }}>
                                    I can solve a Rubik's cube in under 2 minutes!
                                </p>
                            </div>
                        </div>

                        <div style={{
                            width: '100%',
                            height: '100%',
                            border: '0.5px solid #000',
                            padding: '3px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2px',
                            overflowY: 'scroll',
                            overflowX: 'hidden',
                            whiteSpace: 'pre-wrap',
                            flexGrow: 1,
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            },
                        }}>
                            <p className="cousine-bold" style={{ fontSize: '8px', padding: '2px', textAlign: 'center', margin: '0px', paddingTop: '0px' }}>
                                Master of controlled chaos
                            </p>
                            <p className="cousine-regular" style={{ fontSize: '6px', margin: '0px', padding: '0px' }}>
                                24 years old
                            </p>
                            <p className="cousine-regular" style={{ fontSize: '6px', margin: '0px', padding: '0px' }}>
                                Greater Philadelphia, USA
                            </p>
                            <p className="cousine-regular" style={{ fontSize: '5.5px', marginTop: '2px', padding: '0px' }}>
                                I have been drawing and creating since I was physically capable of grasping a pencil. 
                                From the age of 12, I began indulging in digital illustration. I decided to pursue my passion 
                                in design graduated in 2017 at the top of my class with an Associate's Degree in Interactive Design.
                                <br />
                                To quench my hunger for web development knowledge, I kickstarted my web design journey in 2020 
                                and haven't looked back. In my free time, I love to learn new tools and technologies to make 
                                far-out websites and help bring others' visions to life. I also like to sprinkle a little 
                                rollerskating & anime in between.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    ), []);

    return (
        <Screen {...props} onClick={handleScreenClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#3B82F6']} />
            
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={props.htmlScale || 1}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
                        style={{
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
                        }}
                    >
                        <WindowContent />
                    </Html>
                </group>
            ) : (
                <>
                    <ambientLight intensity={Math.PI / 2} />
                    <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
                    <pointLight decay={0} position={[-10, -10, -10]} />
                    <Text 
                        fontSize={0.4} 
                        letterSpacing={-0.1} 
                        color='black'
                        scale={props.textScale || 1}
                        position={[textPosition.x, textPosition.y, textPosition.z]}
                        rotation={[textRotation.x, textRotation.y, textRotation.z]} 
                        font="/Inter-Medium.woff"
                    >
                        About Me
                    </Text>
                </>
            )}
        </Screen>
    );
};