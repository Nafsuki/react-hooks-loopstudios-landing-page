import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/images/logo.svg'
import './Navbar.scss'
import HamburgerMenu from './assets/images/icon-hamburger.svg'
import CloseMenu from './assets/images/icon-close.svg'

const Navbar = () => {
  const [ click, setClick ] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className={click ? 'navbar active' : 'navbar'}>
        <Link to='/'
        className='navbar-logo'>
          <img src={Logo} alt="logo" onClick={closeMobileMenu}/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click 
          ? <img src={CloseMenu} alt="close-menu"/> 
          : <img src={HamburgerMenu} alt="hamburger-menu"/>}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li> 
          <li className="nav-item">
            <Link to='/careers' className='nav-links' onClick={closeMobileMenu}>
              Careers
            </Link>
          </li> 
          <li className="nav-item">
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Events
            </Link>
          </li> 
          <li className="nav-item">
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li> 
          <li className="nav-item">
            <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
              Support
            </Link>
          </li> 
        </ul>
      </nav>
    </>
  )
}

export default Navbar
