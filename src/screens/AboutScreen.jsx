import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Screen } from './Screen';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Heading from '../assets/Text.png';


export const AboutScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false)
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
    const [htmlScale, setHtmlScale] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const handleScreenChange = (event) => {
            if (event.detail.screenName === 'About') {
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

    return (
        <Screen {...props} onClick={props.onClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#35c19f']} />
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={htmlScale}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        style={{
                            width: '245px',
                            height: '180px',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(12px)',
                            borderRadius: '8px',
                            overflow: 'hidden',
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
                                    padding: '5px',
                                    overflowY: 'scroll', // Enables vertical scrollbar only
                                    overflowX: 'hidden', // Prevents horizontal scrollbar
                                    whiteSpace: 'pre-wrap', // Allows text to wrap if necessary
                                    flexGrow: 1,

                                    
                                    border: '1px solid #808080',
                                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
                                    height: '300px',
                                    scrollbarWidth: 'thin', // Makes scrollbar narrower,
                                    height: '300px',
                                }}
                                
                            >
                                <section>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                    <img src={Heading} alt="" style={{width: '100%', height: '100%'}}/>
                                    </div>
                                
                                   
                                </section>
                                
                            </div>

                        </div>
                    </Html>



                </group>
            ) : (
                <>
                    <ambientLight intensity={Math.PI / 2} />
                    <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
                    <pointLight decay={0} position={[-10, -10, -10]} />
                    {/* <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} /> */}
                </>
            )}
        </Screen>
    )
}


function Home() {
    return <div>About me</div>;
}

function About() {
    return <div >This is the About Page</div>;
}

function Contact() {
    return <div>Get in touch on the Contact Page</div>;
}

{/* <Router>
                            <nav style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                                <Link to="/" style={{ color: '#FF6F61', textDecoration: 'none' }}>Home</Link>
                                <Link to="/about" style={{ color: '#FF6F61', textDecoration: 'none' }}>About</Link>
                                <Link to="/contact" style={{ color: '#FF6F61', textDecoration: 'none' }}>Contact</Link>
                            </nav>
                            <Home />
                            <div style={{ textAlign: 'center' }}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </div>
                        </Router> */}