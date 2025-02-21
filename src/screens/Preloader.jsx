import { useState, useEffect, useRef } from "react";
import keypress2 from "../assets/keypressB.mp3";
import { useLoading } from '../context/LoadingContext';

function Preloader() {
  const { setIsLoaded } = useLoading();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [lineBuffer, setLineBuffer] = useState("");
  const [screenFlicker, setScreenFlicker] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const timeoutRef = useRef(null);

  // Preload typing sound for better performance
  const audio = useRef(new Audio(keypress2));
  audio.current.volume = 0.05;

  const playSound = () => {
    audio.current.currentTime = 0;
    audio.current.play();
  };

  const story = [
    { text: "[BOOTING SYSTEM...]", type: "command" },
    { text: "[NEURAL LINK ESTABLISHED]", type: "command" },
    { text: "Welcome, traveler.", type: "story" },
    { text: "I am Byte, the keeper of this archive.", type: "story" },
    { text: "These machines were silent. Forgotten.", type: "story" },
    { text: "Until she rebuilt them.", type: "story" },
    { text: "Hishita Gupta. Architect of this world.", type: "story" },
    { text: "[LOADING DATABASE...]", type: "command" },
    // { text: "Fragments of code. Sparks of innovation.", type: "story" },
    { text: "Step in. See for yourself.", type: "story" },
    { text: "[ACCESS GRANTED]", type: "command" },
    // { text: "This is more than data.", type: "story" },
    // { text: "It's a doorway.", type: "story" },
    
    { text: "[INITIALIZING SYSTEM ACCESS...]", type: "command" },
    { text: "[LOADING NEXT SEQUENCE...]", type: "command" },
  ];

  // Add skip handler
  const handleSkip = () => {
    // Clear any ongoing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set loaded to true to skip preloader
    setIsLoaded(true);
  };

  // Handle start click
  const handleStart = () => {
    setHasStarted(true);
    // Try to play audio here if you have background music
    audio.current.play().catch(console.error);
  };

  // Only start the story after click
  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < story.length) {
      if (charIndex < story[currentIndex].text.length) {
        timeoutRef.current = setTimeout(() => {
          setLineBuffer((prev) => prev + story[currentIndex].text[charIndex]);
          setCharIndex((prev) => prev + 1);
          setProgress((currentIndex / story.length) * 100);
          playSound();
        }, Math.random() * 5 + 10);
      } else {
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev + "\n" + lineBuffer);
          setLineBuffer("");
          setCurrentIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 25);
      }
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, currentIndex, hasStarted]);

  // Flickering Effect (controlled timing)
  useEffect(() => {
    const flickerTimeout = setInterval(() => {
      setScreenFlicker((prev) => !prev);
    }, Math.random() * 4000 + 2000);

    return () => clearInterval(flickerTimeout);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999] overflow-hidden">
      {/* Loading bar at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-green-900/30">
        <div 
          className="h-full bg-green-400 transition-all duration-300 ease-out"
          style={{ 
            width: `${progress}%`,
            boxShadow: '0 0 10px rgba(74, 222, 128, 0.5)'
          }}
        />
      </div>
       {/* CRT Effects */}
       <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none w-full h-full"></div>
          <div className="absolute inset-0 bg-crt-lines opacity-10 mix-blend-overlay pointer-events-none w-full h-full"></div>

          {/* Main content */}
          <div className="relative w-[100vw] pt-10 sm:pt-10 lg:pt-4 h-full sm:w-[100vw] p-4 sm:p-6 
            text-green-400 font-mono text-sm sm:text-lg leading-relaxed rounded-lg 
            shadow-green-500/40 overflow-hidden transition-all duration-150 screen-curved"
          >

      {hasStarted ? (
        <>
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-4 right-4 px-4 py-2 bg-green-400/20 hover:bg-green-400/40 
              text-green-400 border border-green-400 rounded-md transition-all duration-300 
              font-mono text-sm z-50"
          >
            I'm Impatient :)
          </button>

          {/* CRT Effects */}
          
            <pre className="whitespace-pre-line text-[3vw] sm:text-[1.2rem]">
              {displayText.split("\n").map((line, index) => (
                <span key={index} className={line.startsWith("[") ? "text-blue-400 opacity-80" : "text-green-400 opacity-80"}>
                  {line}
                  <br />
                </span>
              ))}
            </pre>
            <pre className="text-yellow-400 opacity-80 text-[3vw] sm:text-[1.2rem]">{lineBuffer}▌</pre>
          
        </>
      ) : (
        // Click to Start screen
        <button
          onClick={handleStart}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            px-8 py-4 bg-green-400/20 hover:bg-green-400/40 
            text-green-400 border-2 border-green-400 rounded-lg 
            transition-all duration-300 font-mono text-lg
            hover:scale-105 focus:scale-105 focus:outline-none
            shadow-[0_0_15px_rgba(74,222,128,0.5)]"
        >
          Click to Start
        </button>
      )}
      
      </div>

      {/* Loading percentage */}
      <div className="absolute top-2 right-4 text-green-400 text-sm font-mono">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default Preloader;
