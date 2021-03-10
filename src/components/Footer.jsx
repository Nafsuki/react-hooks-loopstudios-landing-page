import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import Logo from './assets/images/logo.svg'
import * as FaIcons from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='Footer'>
      <nav className='footer-navbar'>
        <Link to='/'
        className='footer-navbar-logo-link'>
          <img src={Logo} alt="logo"/>
        </Link>

        <ul className='footer-nav-menu'>
          <li className="footer-nav-item">
            <Link to='/about' className='footer-nav-links'>
              About
            </Link>
          </li> 
          <li className="footer-nav-item">
            <Link to='/careers' className='footer-nav-links'>
              Careers
            </Link>
          </li> 
          <li className="footer-nav-item">
            <Link to='/events' className='footer-nav-links'>
              Events
            </Link>
          </li> 
          <li className="footer-nav-item">
            <Link to='/products' className='footer-nav-links'>
              Products
            </Link>
          </li> 
          <li className="footer-nav-item">
            <Link to='/support' className='footer-nav-links'>
              Support
            </Link>
          </li> 
        </ul>
      </nav>
      <div className="sns-icons">
        <div className="icon-container">
            <a href="https://www.facebook.com/" className="icon-link">
              <FaIcons.FaFacebookSquare className='facebook i'/>
            </a>
            <a href="https://www.twitter.com/" className="icon-link">
              <FaIcons.FaTwitter className='twitter i'/>
            </a>
            <a href="https://www.pinterest.com/" className="icon-link">
              <FaIcons.FaPinterest className='pinterest i'/>
            </a>
            <a href="https://www.instagram.com/" className="icon-link">
              <FaIcons.FaInstagram className='instagram i'/>
            </a>
        </div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
