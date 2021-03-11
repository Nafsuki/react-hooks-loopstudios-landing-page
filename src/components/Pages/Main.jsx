import React from 'react'
import './Main.scss'
import InteractiveDesktop from '../assets/images/desktop/image-interactive.jpg'
import InteractiveMobile from '../assets/images/mobile/image-interactive.jpg'

const Main = () => {
  return (
    <div className="Main">
      <div className="main-title">
        <div className="img-container">
          <img src={InteractiveDesktop} alt="interactive" className="img-desktop-interactive"/>
          <img src={InteractiveMobile} alt="interactive" className="img-mobile-interactive"/>
        </div>
        <div className="txt-container">
          <h2>the leader in<br />interactive vr</h2>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Main
