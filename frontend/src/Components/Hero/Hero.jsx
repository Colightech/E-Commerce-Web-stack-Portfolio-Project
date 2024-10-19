import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
            <h1>NEW ARRIVAL ONLY</h1>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="hero-arrow-icon">
                <h3>Latest Collections</h3>
                <img src={arrow_icon} alt="" />
            </div>
       </div>

       <div className="hero-right">
            <img src={hero_image} alt="" />
       </div>
    </div>
  )
}

export default Hero
