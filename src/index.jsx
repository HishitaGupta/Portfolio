import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Logo } from '@pmndrs/branding'
import { useState } from 'react'

function Overlay() {
  const [currentScreen, setCurrentScreen] = useState(0)
  
  const screens = [
    {
      name: 'About',
      position: [0.1, 0.1, 0.89],
      rotation: [0, -0.01, 0],
      fov: 32
    },
    {
      name: 'Projects',
      position: [0.4, 0.5, 0.5],
      rotation: [0, 1.1, 0],
      fov: 45
    },
    {
      name: 'Services',
      position: [-0.1, -0.4, 1.4],
      rotation: [0, 1.09, 0],
      fov: 30
    },
    {
      name: 'Experience',
      position: [0.4, -0.5, 1.5],
      rotation: [0, -0.4, 0],
      fov: 30
    },
    {
      name: 'Achievements',
      position: [0.4, 0.3, 2.1],
      rotation: [0, -0.8, 0],
      fov: 20
    },
    {
      name: 'Hobbies',
      position: [-0.2, 0.8, 2.1],
      rotation: [0, 1.3, 0],
      fov: 23
    },
    {
      name: 'Home',
      position: [0, 0, 4.5],
      rotation: [0, 0, 0],
      fov: 45
    }

  ]

  const defaultView = {
    position: [0, 0, 4.5],
    rotation: [0, 0, 0],
    fov: 45
  }

  const handleNextScreen = () => {
    const nextIndex = (currentScreen + 1) % screens.length
    setCurrentScreen(nextIndex)
    const nextScreen = screens[nextIndex]

    window.dispatchEvent(new CustomEvent('changeScreen', {
      detail: {
        position: nextScreen.position,
        rotation: nextScreen.rotation,
        fov: nextScreen.fov,
        screenName: nextScreen.name
      }
    }))
  }

  const handleResetView = () => {
    setCurrentScreen(-1)
    window.dispatchEvent(new CustomEvent('changeScreen', {
      detail: {
        position: defaultView.position,
        rotation: defaultView.rotation,
        fov: defaultView.fov,
        screenName: 'default'
      }
    }))
  }

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
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
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
  </>
)
