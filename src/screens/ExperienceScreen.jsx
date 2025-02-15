// import React, { useState, useEffect } from 'react';
// import { PerspectiveCamera, Html } from '@react-three/drei';
// import * as dat from 'dat.gui';
// import { Screen } from './Screen';
// import { SpinningBox } from './SpinningBox';
// import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
// import { IoMdClose } from 'react-icons/io';
// import Heading from '../assets/Text.png';
// import Hishita from '../assets/Hishita.jpg';

// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';


// export const ExperienceScreen = (props) => {
//     const [showHtml, setShowHtml] = useState(false)
//     const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 })
//     const [htmlScale, setHtmlScale] = useState(1)
//     const [isTransitioning, setIsTransitioning] = useState(false)



//     const experiences = [
//         {
//             title: "Web Developer",
//             company_name: "Chitkara University Centre Of Enterpreneurship Education and Development",
//             icon: Hishita,
//             iconBg: "#accbe1",
//             date: "March 2024 - present",
//             points: [
//                 "Managing and updating the official website for the Chitkara University Centre for Entrepreneurship Education & Development (CUCEED).",
//                 "Implemented responsive design principles to ensure seamless user experiences across different devices and browsers.",

//             ],
//         },
//         {
//             title: "Events Executive",
//             company_name: "Coding Ninjas CUIET Chapter- Chitkara University",
//             icon: Hishita,
//             iconBg: "#fbc3bc",
//             date: "March 2024 - present",
//             points: [
//                 "Played a pivotal role in executing technical events and assisting in event planning activities and initiatives",
//                 "Contributed fresh ideas and effectively coordinated with the team to ensure successful event management and participant satisfaction",

//             ],
//         },
//         {
//             title: "Web Developer Intern",
//             company_name: "CodSoft",
//             icon: Hishita,
//             iconBg: "#b7e4c7",
//             date: "Jan 2022 - Jan 2023",
//             points: [
//                 "Created personal portfolio, landing page, and calculator using HTML, CSS, and JavaScript.",
//                 "Initiated academic journey in web development.",
//                 " Gained practical skills and insights in coding and design.",

//             ],
//         },
//         {
//             title: "Director General",
//             company_name: "Model United Nations - Mukat Public School",
//             icon: Hishita,
//             iconBg: "#a2d2ff",
//             date: "Oct 2023 ",
//             points: [
//                 "Led a team in organizing and executing a successful Model United Nations conference.",
//                 "Oversaw smooth event execution and Curated engaging committees for participants",
//                 "Facilitated impactful discussions on pressing global issues and demonstrated strong leadership, communication, and organizational abilities.",
//                 "Ensured a positive participant experience throughout the event.",

//             ],
//         },
//     ];

//     // Add event listener for screen changes
//     useEffect(() => {
//         const handleScreenChange = (event) => {
//             if (event.detail.screenName === 'Experience') {
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
//             <color attach="background" args={['#E63946']} />
//             {showHtml && !isTransitioning ? (
//                 <group>
//                     <Html
//                         transform
//                         scale={props.htmlScale || htmlScale}
//                         position={props.htmlPos || [htmlPosition.x, htmlPosition.y, htmlPosition.z]}
//                         rotation={props.htmlRot || [htmlRotation.x, htmlRotation.y, htmlRotation.z]}
//                         style={{
//                             width: '245px',
//                             height: '180px',
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
//                                     C:\Users\Hishita Gupta\Life\Experience.txt
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
//                                                                 style={{
//                                                                     width: '6px',
//                                                                     height: '1px',
//                                                                     backgroundColor: '#000',
//                                                                 }}
//                                                             ></div> */}
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
//                                                                 style={{
//                                                                     width: '6px',
//                                                                     height: '6px',
//                                                                     border: '1px solid #000',
//                                                                 }}
//                                                             ></div> */}
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
//                                                                 style={{
//                                                                     width: '6px',
//                                                                     height: '6px',
//                                                                     backgroundColor: '#FF0000',
//                                                                 }}
//                                                             ></div> */}
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
//                                     display: 'flex',
//                                     gap: '10px',
//                                     flexDirection: 'column',
//                                     width: '100%',
//                                     msOverflowStyle: 'none',
//                                     scrollbarWidth: 'none',
//                                     '&::-webkit-scrollbar': {
//                                         display: 'none'
//                                     }
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         gap: '10px',
//                                         position: 'relative', // Needed for the vertical line
//                                     }}
//                                 >
//                                     {/* Vertical Line */}
//                                     <div
//                                         style={{
//                                             position: 'absolute',
//                                             left: '15px', // Adjusted for the icon alignment
//                                             top: '0',
//                                             bottom: '0',
//                                             width: '1px',
//                                             backgroundColor: 'black', // Line color
//                                             zIndex: 0,
//                                         }}
//                                     ></div>

//                                     {experiences.map((experience, index) => (
//                                         <div
//                                             key={experience.company_name}
//                                             style={{
//                                                 display: 'flex',
//                                                 gap: '10px',
//                                                 alignItems: 'flex-start',
//                                                 position: 'relative',
//                                                 zIndex: 1, // Above the vertical line
//                                             }}
//                                         >
//                                             {/* Icon */}
//                                             <div
//                                                 style={{
//                                                     display: 'flex',
//                                                     justifyContent: 'center',
//                                                     alignItems: 'center',
//                                                     width: '30px',
//                                                     height: '30px',
//                                                     backgroundColor: 'red',
//                                                     borderRadius: '50%',
//                                                     flexShrink: 0,
//                                                 }}
//                                             >
//                                                 <img
//                                                     src={experience.icon}
//                                                     alt={experience.company_name}
//                                                     style={{
//                                                         width: '20px',
//                                                         height: '20px',
//                                                         borderRadius: '50%',
//                                                         objectFit: 'contain',
//                                                     }}
//                                                 />
//                                             </div>

//                                             {/* Content */}
//                                             <div
//                                                 style={{
//                                                     display: 'flex',
//                                                     flexDirection: 'column',
//                                                     gap: '2px',
//                                                     backgroundColor: '#FFFFFF',
//                                                     border: `1px solid ${experience.iconBg}`,
//                                                     borderRadius: '4px',
//                                                     padding: '8px',
//                                                     paddingLeft: '10px',
//                                                     width: 'calc(240px - 50px)', // Adjusted width for parent container
//                                                     position: 'relative'
//                                                 }}
//                                             >
//                                                 {/* Title */}
//                                                 <h3
//                                                     style={{
//                                                         // margin: 0,
//                                                         color: 'black',
//                                                         fontSize: '8px',
//                                                         margin: '2px',
//                                                         // fontWeight: 600,
//                                                     }}
//                                                     className="bungee-regular"
//                                                 >
//                                                     {experience.title}
//                                                 </h3>
//                                                 {/* Company Name */}
//                                                 <p
//                                                     style={{
//                                                         margin: '2px',
//                                                         fontWeight: 600,
//                                                         fontSize: '6px',
//                                                         color: '#000',
//                                                     }}
//                                                     className="cousine-bold"
//                                                 >
//                                                     {experience.company_name}
//                                                 </p>
//                                                 {/* Date */}
//                                                 <p
//                                                     style={{
//                                                         margin: 0,
//                                                         fontSize: '5px',
//                                                         color: '#888',
//                                                         position: 'absolute',
//                                                         top: '3px',
//                                                         right: '3px'
//                                                     }}
//                                                     className="cousine-bold"
//                                                 >
//                                                     {experience.date}
//                                                 </p>
//                                                 {/* Points */}
//                                                 <ul
//                                                     style={{
//                                                         margin: 0,
//                                                         padding: 0,
//                                                         listStyleType: 'disc',
//                                                         marginLeft: '5px',
//                                                         fontSize: '6px',
//                                                         color: '#333',
//                                                         display: 'flex',
//                                                         flexDirection: 'column',
//                                                         gap: '1px',
//                                                     }}
//                                                     className='cousine-regular'
//                                                 >
//                                                     {experience.points.map((point, pointIndex) => (
//                                                         <li key={`point-${index}-${pointIndex}`}>{point}</li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     ))}
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
//                     <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} />
//                 </>
//             )}
//         </Screen>
//     )
// }


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { PerspectiveCamera, Html, Text } from '@react-three/drei';
import { FaRegWindowMaximize, FaRegWindowMinimize } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Hishita from '../assets/Hishita.jpg';
import { Screen } from './Screen';
import * as dat from 'dat.gui';

// Separate styled components for better performance and reusability
const WindowContainer = React.memo(({ children }) => (
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
        {children}
    </div>
));

const TitleBar = React.memo(({ title }) => (
    <div style={{
        backgroundColor: '#000080',
        color: '#FFFFFF',
        padding: '1.5px 2px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        <span style={{ padding: '0', fontSize: '6px' }}>{title}</span>
        <WindowControls />
    </div>
));

const WindowControls = React.memo(() => (
    <div style={{ display: 'flex', gap: '2px' }}>
        <WindowButton>
            <FaRegWindowMinimize style={{ width: '6px', height: '1px', backgroundColor: '#fff' }} />
        </WindowButton>
        <WindowButton>
            <FaRegWindowMaximize style={{ width: '6px', height: '6px', color: 'black' }} />
        </WindowButton>
        <WindowButton>
            <IoMdClose style={{ width: '6px', height: '6px', color: '#000000' }} />
        </WindowButton>
    </div>
));

const WindowButton = React.memo(({ children }) => (
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
        {children}
    </div>
));

const MenuBar = React.memo(() => (
    <div style={{
        backgroundColor: '#C0C0C0',
        color: '#000000',
        padding: '1.5px 1px',
        fontSize: '5px',
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
    }}>
        {['Me', 'Edit', 'Search', 'Help'].map(item => (
            <span key={item}>{item}</span>
        ))}
    </div>
));

const ExperienceItem = React.memo(({ experience }) => (
    <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 1,
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '30px',
            height: '30px',
            backgroundColor: 'red',
            borderRadius: '50%',
            flexShrink: 0,
        }}>
            <img
                src={experience.icon}
                alt={experience.company_name}
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    objectFit: 'contain',
                }}
            />
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            backgroundColor: '#FFFFFF',
            border: `1px solid ${experience.iconBg}`,
            borderRadius: '4px',
            padding: '8px',
            paddingLeft: '10px',
            width: 'calc(240px - 50px)',
            position: 'relative'
        }}>
            <h3 className="bungee-regular" style={{
                color: 'black',
                fontSize: '8px',
                margin: '2px',
            }}>{experience.title}</h3>
            <p className="cousine-bold" style={{
                margin: '2px',
                fontWeight: 600,
                fontSize: '6px',
                color: '#000',
            }}>{experience.company_name}</p>
            <p className="cousine-bold" style={{
                margin: 0,
                fontSize: '5px',
                color: '#888',
                position: 'absolute',
                top: '3px',
                right: '3px'
            }}>{experience.date}</p>
            <ul className="cousine-regular" style={{
                margin: 0,
                padding: 0,
                listStyleType: 'disc',
                marginLeft: '5px',
                fontSize: '5px',
                color: '#333',
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
            }}>
                {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </div>
));

// Main component
export const ExperienceScreen = React.memo((props) => {
    const [showHtml, setShowHtml] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [textPosition] = useState({ x: 0, y: 0.7, z: 0 });
    const [textRotation] = useState({ x: 0, y: 0, z: 0 });
    const [htmlPosition, setHtmlPosition] = useState({ x: 0, y: 0, z: 0 });
    const [htmlRotation, setHtmlRotation] = useState({ x: 0, y: 0, z: 0 });
    const [htmlScale, setHtmlScale] = useState(1);

    // Memoized experiences data
    const experiences = useMemo(() => [
        {
            title: "Web Developer",
            company_name: "Chitkara University Centre Of Enterpreneurship Education and Development",
            icon: Hishita,
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
    ], []);

    // Memoized event handler
    const handleScreenChange = useCallback((event) => {
        if (event.detail.screenName === 'Experience') {
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
        if (!isTransitioning && props.onClick) {
            setIsTransitioning(true);
            props.onClick(e);
            setTimeout(() => {
                setShowHtml(true);
                setIsTransitioning(false);
            }, 1000);
        }
    }, [isTransitioning, props.onClick]);

    // useEffect(() => {
    //     if (showHtml) {
    //         const gui = new dat.GUI({ name: 'HTML Controls' });
    
    //         // Temporary values to sync with state
    //         let tempHtmlPosition = { ...htmlPosition };
    //         let tempHtmlRotation = { ...htmlRotation };
    //         let tempHtmlScale = htmlScale;
    
    //         const posFolder = gui.addFolder('HTML Position');
    //         posFolder.add(tempHtmlPosition, 'x', -3, 20, 0.1).onChange((value) => {
    //             setHtmlPosition(prev => ({ ...prev, x: value }));
    //         });
    //         posFolder.add(tempHtmlPosition, 'y', -3, 20, 0.1).onChange((value) => {
    //             setHtmlPosition(prev => ({ ...prev, y: value }));
    //         });
    //         posFolder.add(tempHtmlPosition, 'z', -3, 20, 0.1).onChange((value) => {
    //             setHtmlPosition(prev => ({ ...prev, z: value }));
    //         });
    
    //         const rotFolder = gui.addFolder('HTML Rotation');
    //         rotFolder.add(tempHtmlRotation, 'x', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setHtmlRotation(prev => ({ ...prev, x: value }));
    //         });
    //         rotFolder.add(tempHtmlRotation, 'y', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setHtmlRotation(prev => ({ ...prev, y: value }));
    //         });
    //         rotFolder.add(tempHtmlRotation, 'z', -Math.PI, Math.PI, 0.1).onChange((value) => {
    //             setHtmlRotation(prev => ({ ...prev, z: value }));
    //         });
    
    //         const scaleFolder = gui.addFolder('HTML Scale');
    //         scaleFolder.add({ scale: tempHtmlScale }, 'scale', 0.1, 3, 0.1).onChange((value) => {
    //             setHtmlScale(value);
    //         });
    
    //         posFolder.open();
    //         rotFolder.open();
    //         scaleFolder.open();
    
    //         return () => {
    //             gui.destroy();
    //         };
    //     }
    // }, [showHtml]);
    
    const isMobile = window.innerWidth <= 768;
    
    const htmlContent = useMemo(() => (
        showHtml && !isTransitioning && (
            <group>
                <Html
                    transform
                    scale={isMobile ? props.mobileHtmlScale : (props.htmlScale )}
                    position={isMobile  ? props.mobileHtmlPos : (props.htmlPos )}
                    rotation={isMobile  ? props.mobileHtmlRot : (props.htmlRot )}
                    style={{
                        width: '245px',
                        height: '180px',
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
                    <WindowContainer>
                        <TitleBar title="C:\Users\Hishita Gupta\Life\Experience.txt" />
                        <MenuBar />
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            padding: '10px',
                            flexGrow: 1,
                            border: '1px solid #808080',
                            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
                            overflowY: 'scroll',
                            overflowX: 'hidden',
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' }
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                position: 'relative',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '15px',
                                    top: '0',
                                    bottom: '0',
                                    width: '1px',
                                    backgroundColor: 'black',
                                    zIndex: 0,
                                }} />
                                {experiences.map((experience, index) => (
                                    <ExperienceItem key={index} experience={experience} />
                                ))}
                            </div>
                        </div>
                    </WindowContainer>
                </Html>
            </group>
        )
    ), [
        showHtml, 
        isTransitioning, 
        // htmlScale,
        // htmlPosition,
        // htmlRotation,
        props.htmlScale,
        props.htmlPos,
        props.htmlRot,
        props.mobileHtmlPos,
        props.mobileHtmlRot,
        props.mobileHtmlScale,
        experiences
    ]);


    return (
        <Screen {...props} onClick={handleScreenClick}>
            <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
            <color attach="background" args={['#E63946']} />
            {htmlContent}
            {!showHtml && (
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
                        Experience
                    </Text>
                </>
            )}
        </Screen>
    );
});
