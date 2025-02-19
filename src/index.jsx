import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Logo } from '@pmndrs/branding'
import { useState,useEffect } from 'react'
// import { BsMusicNoteBeamed, BsMusicNoteSlash } from 'react-icons/bs'
import { MdMusicNote, MdMusicOff, MdOutlineMusicOff } from 'react-icons/md'
import { TbMusicOff } from 'react-icons/tb'
import Preloader from './screens/Preloader'




function Overlay() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [audio] = useState(new Audio('/portfolio-bg-music.mp3'));
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;
  
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
  
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
  
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);
  

  const toggleMusic = () => {
    if (audio.paused) {
      audio.play().catch(error => console.error("Audio play error:", error));
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  
  
  const screens = [
    {
      name: 'About',
      position: [0.1, 0.1, 0.89],
      rotation: [0, -0.01, 0],
      fov: 32,
      mobilePosition:[0.1,-0.2,6.5],
      mobileRotation:[0,0,0],
      mobileFov:9 
    },
    {
      name: 'Projects',
      position: [0.4, 0.6, 0.8],
      rotation: [0, 1, 0],
      fov: 30,
      mobilePosition:[1.4,0.1,1.6],
      mobileRotation:[0,1,0],
      mobileFov:28
    },
    {
      name: 'Services',
      position: [-0.1, -0.4, 1.4],
      rotation: [0, 1.09, 0],
      fov: 30,
      mobilePosition:[0.2,-0.6,1.5],
      mobileRotation:[0,1,0],
      mobileFov:49
    },
    {
      name: 'Experience',
      position: [0.4, -0.5, 1.5],
      rotation: [0, -0.4, 0],
      fov: 30,
      mobilePosition:[-1.9,-0.6,6.5],
      mobileRotation:[0,-0.4,0],
      mobileFov:10
    },
    {
      name: 'Achievements',
      position: [0.4, 0.3, 2.1],
      rotation: [0, -0.8, 0],
      fov: 20,
      mobilePosition:[0, -0.2, 1.8],    // mobileTargetPos
      mobileRotation:[0, -0.9, 0],        // mobileTargetRot
      mobileFov:32
    },
    {
      name: 'Hobbies',
      position: [-0.2, 0.8, 2.1],
      rotation: [0, 1.3, 0],
      fov: 23,
      mobilePosition:[1.1, 0.3, 2.1],    // mobileTargetPos
      mobileRotation:[0, 1.3, 0],        // mobileTargetRot
      mobileFov:24
    },
    {
      name: 'Home',
      position: [0, 0, 4.5],
      rotation: [0, 0, 0],
      fov: 45,
      mobilePosition:[0, 0, 6.5],    // mobileTargetPos
      mobileRotation:[0, 0, 0],        // mobileTargetRot
      mobileFov:60
    }

  ]

  const isMobile = window.innerWidth <= 768;

  const defaultView = {
    position:isMobile ? [0,0,6.5] : [0, 0, 4.5],
    rotation: [0, 0, 0],
    fov: isMobile ? 60 : 45
  }

  const handleNextScreen = () => {
    const nextIndex = (currentScreen + 1) % screens.length
    setCurrentScreen(nextIndex)
    const nextScreen = screens[nextIndex]
    const isMobile = window.innerWidth <= 768

    window.dispatchEvent(new CustomEvent('changeScreen', {
      detail: {
        position: isMobile ? nextScreen.mobilePosition : nextScreen.position,
        rotation: isMobile ? nextScreen.mobileRotation : nextScreen.rotation,
        fov: isMobile ? nextScreen.mobileFov : nextScreen.fov,
        screenName: nextScreen.name
      }
    }))
  }

  const handleResetView = () => {
    setCurrentScreen(-1)
    const isMobile = window.innerWidth <= 768

    window.dispatchEvent(new CustomEvent('changeScreen', {
      detail: {
        position: isMobile ? defaultView.mobilePosition || defaultView.position : defaultView.position,
        rotation: isMobile ? defaultView.mobileRotation || defaultView.rotation : defaultView.rotation,
        fov: isMobile ? defaultView.mobileFov || defaultView.fov : defaultView.fov,
        screenName: 'default'
      }
    }))
  }

 

  return (
    <>
    {!isLoaded && <Preloader onLoaded={() => setIsLoaded(true)} />}
    {isLoaded && (<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',overflow: 'hidden' }}>
      <a href="" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Hishita Gupta
        <br />
        Full Stack Developer
        
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>ok —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        {new Date().toLocaleDateString()}
      </div>
      
      
      <button
        onClick={handleNextScreen}
        className="screen-cycle-button"
      >
        Next: {screens[(currentScreen + 1) % screens.length].name}
      </button>

      <button
        onClick={handleResetView}
        className="reset-view-button"
      >
        Reset View
      </button>
      <button
        onClick={toggleMusic}
        className="toggle-music-button"
      >
        {isPlaying ? <MdMusicNote size={20} /> : <MdOutlineMusicOff size={20} />}
      </button>
    </div>)}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
  </>
)
