import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html } from '@react-three/drei';
import * as dat from 'dat.gui';
import { Screen } from './Screen';
import { SpinningBox } from './SpinningBox';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Heading from '../assets/Text.png';
import Hishita from '../assets/Hishita.jpg';

export const ServicesScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false)
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
    const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
    const [htmlScale, setHtmlScale] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Add event listener for screen changes
    useEffect(() => {
        const handleScreenChange = (event) => {
            if (event.detail.screenName === 'Services') {
                setIsTransitioning(true);
                setTimeout(() => {
                    setShowHtml(true);
                    setIsTransitioning(false);
                }, 1000);
            } else {
                setShowHtml(false);
            }
        };

        window.addEventListener('changeScreen', handleScreenChange);
        return () => window.removeEventListener('changeScreen', handleScreenChange);
    }, []);

    useEffect(() => {
        if (showHtml) {
            const gui = new dat.GUI({ name: 'HTML Controls' });

            const posFolder = gui.addFolder('HTML Position');

            posFolder.add(htmlPosition, 'x', -3, 3, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, x: value }));
            });
            posFolder.add(htmlPosition, 'y', -3, 3, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, y: value }));
            });
            posFolder.add(htmlPosition, 'z', -3, 3, 0.1).onChange((value) => {
                setHtmlPosition(prev => ({ ...prev, z: value }));
            });

            const rotFolder = gui.addFolder('HTML Rotation');
            rotFolder.add(htmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
                setHtmlRotation(prev => ({ ...prev, x: value }));
            });
            rotFolder.add(htmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
                setHtmlRotation(prev => ({ ...prev, y: value }));
            });
            rotFolder.add(htmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
                setHtmlRotation(prev => ({ ...prev, z: value }));
            });

            const scaleFolder = gui.addFolder('HTML Scale');
            scaleFolder.add({ scale: htmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
                setHtmlScale(value);
            });

            posFolder.open();
            scaleFolder.open();

            return () => {
                gui.destroy();
            };
        }
    }, [showHtml]);

    return (
        <Screen {...props} onClick={props.onClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#FFC857']} />
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={props.htmlScale || htmlScale}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
                        style={{
                            width: '270px',
                            height: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(8px)',
                            transformOrigin: 'center',
                            borderRadius: '10px',
                            // border: '2px solid white',
                            mixBlendMode: 'difference',
                            padding: '8px',
                        }}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#C0C0C0',
                                border: '1px solid #000',
                                fontFamily: 'Tahoma, sans-serif',
                                fontSize: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1.5px',
                            }}
                        >
                            {/* Title Bar */}
                            <div
                                style={{
                                    backgroundColor: '#000080',
                                    color: '#FFFFFF',
                                    padding: '1.5px 2px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        padding: '0',
                                        fontSize: '6px',
                                    }}
                                >
                                    C:\Users\Hishita Gupta\Life\About.txt
                                </span>

                                {/* Title Bar Buttons */}
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '2px',
                                    }}
                                >
                                    {/* Minimize Button */}
                                    <div
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: '#C0C0C0',
                                            border: '1px solid #808080',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {/* <div
                                            style={{
                                                width: '6px',
                                                height: '1px',
                                                backgroundColor: '#000',
                                            }}
                                        ></div> */}
                                        <FaRegWindowMinimize style={{
                                            width: '6px',
                                            height: '1px',
                                            backgroundColor: '#fff',
                                        }} />
                                    </div>

                                    {/* Maximize Button */}
                                    <div
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: '#C0C0C0',
                                            border: '1px solid #808080',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {/* <div
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                border: '1px solid #000',
                                            }}
                                        ></div> */}
                                        <FaRegWindowMaximize
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                color: 'black',
                                                // backgroundColor: '#000'
                                            }} />
                                    </div>

                                    {/* Close Button */}
                                    <div
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: '#C0C0C0',
                                            border: '1px solid #808080',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer',

                                        }}
                                    >
                                        {/* <div
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                backgroundColor: '#FF0000',
                                            }}
                                        ></div> */}
                                        <IoMdClose
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                color: '#000000',
                                                //  backgroundColor: '#000'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Menu Bar */}
                            <div
                                style={{
                                    backgroundColor: '#C0C0C0',
                                    color: '#000000',
                                    padding: '1.5px 1px',
                                    fontSize: '5px',
                                    display: 'flex',
                                    gap: '4px',
                                    alignItems: 'center',
                                }}
                            >
                                <span>Me</span>
                                <span>Edit</span>
                                <span>Search</span>
                                <span>Help</span>
                            </div>

                            {/* Content Area */}
                            <div
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#000000',
                                    padding: '10px',
                                    overflowY: 'scroll', // Enables vertical scrollbar only
                                    overflowX: 'hidden', // Prevents horizontal scrollbar
                                    whiteSpace: 'pre-wrap', // Allows text to wrap if necessary
                                    flexGrow: 1,
                                    border: '1px solid #808080',
                                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
                                    height: '300px',
                                    // scrollbarWidth: 'thin', // Makes scrollbar narrower
                                    // '&::-webkit-scrollbar': {
                                    //     width: 'thin' // Makes scrollbar narrower for webkit browsers
                                    msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
                                    scrollbarWidth: 'none', // Hide scrollbar for Firefox
                                    '&::-webkit-scrollbar': { // Hide scrollbar for Chrome/Safari/Opera
                                        display: 'none'
                                    }
                                }}
                            >
                                <div style={{ display: 'flex', gap: '10px', width: '100%', height: '70px' }}>
                                    <div style={{ border: '1px solid #000', width: '70%', padding: '2px', gap: '2px', display: 'flex', flexDirection: 'column' ,justifyContent:'center',alignItems:'center'}}>
                                        <p class="bungee-regular" style={{ fontSize: '8px', margin: '0px', padding: '0px' }}>Tech Stack</p>
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px',alignItems:'center'}}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg" alt="TypeScript" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" alt="FastAPI" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" alt="Three.js" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" alt="TensorFlow" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg" alt="PyTorch" style={{ width: '15px', height: '15px' }} />
                                            
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Vercel_logo_black.svg" alt="Vercel" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://avatars.githubusercontent.com/u/44036562?s=200&v=4" alt="GitHub Actions" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Docker_%28container_engine%29_logo.svg" alt="Docker" style={{ width: '15px', height: '15px' }} />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" alt="Arduino" style={{ width: '15px', height: '15px' }} />
                                        </div>
                                        </div>

                                        

                                    </div>
                                    <div style={{ width: '30%', display: 'flex', gap: '10px', flexDirection: 'column' }}>
                                        <div style={{ border: '1px solid #000', width: '100%', height: '50%' }}></div>
                                        <div style={{ border: '1px solid #000', width: '100%', height: '50%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Html>
                </group>
            ) : (
                <>
                    <ambientLight intensity={Math.PI / 2} />
                    <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
                    <pointLight decay={0} position={[-10, -10, -10]} />
                    <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />
                </>
            )}
        </Screen>
    )
}

