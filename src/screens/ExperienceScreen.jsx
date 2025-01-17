import React, { useState, useEffect } from 'react';
import { PerspectiveCamera, Html } from '@react-three/drei';
import * as dat from 'dat.gui';
import { Screen } from './Screen';
import { SpinningBox } from './SpinningBox';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Heading from '../assets/Text.png';
import Hishita from '../assets/Hishita.jpg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const ExperienceScreen = (props) => {
    const [showHtml, setShowHtml] = useState(false)
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
    const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
    const [htmlScale, setHtmlScale] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false)

    

    const experiences = [
        {
            title: "Web Developer",
            company_name: "Chitkara University Centre Of Enterpreneurship Education and Development",
            icon: Hishita ,
            iconBg: "#accbe1",
            date: "March 2024 - present",
            points: [
                "Managing and updating the official website for the Chitkara University Centre for Entrepreneurship Education & Development (CUCEED).",
                "Implemented responsive design principles to ensure seamless user experiences across different devices and browsers.",
    
            ],
        },
        {
            title: "Events Executive",
            company_name: "Coding Ninjas CUIET Chapter- Chitkara University",
            icon: Hishita,
            iconBg: "#fbc3bc",
            date: "March 2024 - present",
            points: [
                "Played a pivotal role in executing technical events and assisting in event planning activities and initiatives",
                "Contributed fresh ideas and effectively coordinated with the team to ensure successful event management and participant satisfaction",
    
            ],
        },
        {
            title: "Web Developer Intern",
            company_name: "CodSoft",
            icon: Hishita,
            iconBg: "#b7e4c7",
            date: "Jan 2022 - Jan 2023",
            points: [
                "Created personal portfolio, landing page, and calculator using HTML, CSS, and JavaScript.",
                "Initiated academic journey in web development.",
                " Gained practical skills and insights in coding and design.",
    
            ],
        },
        {
            title: "Director General",
            company_name: "Model United Nations - Mukat Public School",
            icon: Hishita,
            iconBg: "#a2d2ff",
            date: "Oct 2023 ",
            points: [
                "Led a team in organizing and executing a successful Model United Nations conference.",
                "Oversaw smooth event execution and Curated engaging committees for participants",
                "Facilitated impactful discussions on pressing global issues and demonstrated strong leadership, communication, and organizational abilities.",
                "Ensured a positive participant experience throughout the event.",
    
            ],
        },
    ];

    // Add event listener for screen changes
    useEffect(() => {
        const handleScreenChange = (event) => {
            if (event.detail.screenName === 'Experience') {
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

    const handleScreenClick = (e) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            if (props.onClick) {
                props.onClick(e);
                // Wait for camera animation to complete before showing HTML
                setTimeout(() => {
                    setShowHtml(true);
                    setIsTransitioning(false);
                }, 1000); // Yes, this is one second (1000 milliseconds)
            }
        }
    };

    return (
        <Screen {...props} onClick={handleScreenClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#E63946']} />
            {showHtml && !isTransitioning ? (
                <group>
                    <Html
                        transform
                        scale={props.htmlScale || htmlScale}
                        position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
                        rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
                        style={{
                            width: '245px',
                            height: '180px',
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
                                    C:\Users\Hishita Gupta\Life\Experience.txt
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
                                    },
                                    display: 'flex', gap: '10px',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ display: 'flex', gap: '10px', width: '100%', border: '1px solid #000', height: '100%', flexDirection: 'column', alignContent: 'space-between' }}>
                                    


                                    <VerticalTimeline animate={false}>
                                        {experiences.map((experience) => (
                                            <VerticalTimelineElement
                                                key={experience.company_name}
                                                date={
                                                    <p style={{
                                                        fontSize:'3px'
                                                    }}>{experience.date}</p>
                                                    }
                                                icon={
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '1px',
                                                            height: '1px',
                                                            objectFit: 'contain',
                                                        }}
                                                    >
                                                        <img
                                                            src={experience.icon}
                                                            alt={experience.company_name}
                                                            style={{
                                                                width: '2px',
                                                                height: '2px',
                                                                objectFit: 'contain',
                                                                borderRadius: '1px', // Tailwind `rounded-md`
                                                            }}
                                                        />
                                                    </div>
                                                }
                                                iconStyle={{
                                                    background: experience.iconBg,
                                                    width: '2px',
                                                     height: '2px',

                                                }}
                                                contentStyle={{
                                                    borderBottom: '1px solid',
                                                    borderBottomColor: experience.iconBg,
                                                    boxShadow: 'none',
                                                    width: '100px',
                                                    height: '100px',
                                                }}
                                            >
                                                <div>
                                                    <h3
                                                        style={{
                                                            color: 'black',
                                                            fontSize: '4px', // Tailwind `text-xl`
                                                            fontWeight: 600, // Tailwind `font-semibold`
                                                            
                                                        }}
                                                    >
                                                        {experience.title}
                                                    </h3>
                                                    <p
                                                        style={{
                                                            // color: '#6b7280', // Tailwind `text-black-500`
                                                            fontWeight: 500, // Tailwind `font-medium`
                                                            fontSize: '4px', // Tailwind `font-base`
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {experience.company_name}
                                                    </p>
                                                </div>
                                                <ul
                                                    style={{
                                                        marginTop: '1px', // Tailwind `my-5`
                                                        marginBottom: '1px', // Tailwind `my-5`
                                                        listStyleType: 'disc', // Tailwind `list-disc`
                                                        marginLeft: '1px', // Tailwind `ml-5`
                                                        gap: '1px', // Tailwind `space-y-2`
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    {experience.points.map((point, index) => (
                                                        <li
                                                            key={`experience-point-${index}`}
                                                            style={{
                                                                // color: 'rgba(107, 114, 128, 0.5)', // Tailwind `text-black-500/50`
                                                                fontWeight: 400, // Tailwind `font-normal`
                                                                paddingLeft: '1px', // Tailwind `pl-1`
                                                                fontSize: '5px', // Tailwind `text-small`
                                                            }}
                                                        >
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </VerticalTimelineElement>
                                        ))}
                                    </VerticalTimeline>


                                   






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
