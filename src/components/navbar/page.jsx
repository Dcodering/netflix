import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import bell_icon from '../../assets/bell_icon.svg'
import search_icon from '../../assets/search_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import './page.css'
import { UserButton } from '@clerk/clerk-react'
function Navbar() {

  const navRef = useRef();

  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      if (window.scrollY >= 80) {
        navRef.current.classList.add('navDark')
      } else {
        navRef.current.classList.remove('navDark')
      }
    })
  }, [])
  return (
    <div ref={navRef} className='navbar'>
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
          <UserButton />
          {/* <img src={profile} alt="" className='profile' />
          <img src={caret_icon} alt="" className='' />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar