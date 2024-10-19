import React from 'react'
import './Navbar.css'
import nav_logo from '../../assets/nav-logo.svg'
import nav_profile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={nav_logo} alt="" className="nav-logo-img" />
        </div>

        <div className="nav-profile">
            <img src={nav_profile} alt="" className="nav-profile-img" />
        </div>
    </div>
  )
}

export default Navbar
