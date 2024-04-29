import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'
export const Nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };


  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);


  return (
//sm device 
 <nav className={`active ${show && 'hidden'}`}> 
  {/* Branding */}
    <h1 className='nav-brand'>NJenkins.</h1>  

  {/* Nav List */}
  
 {toggleDropdown ? (
  <div className='dropdown-content'>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='hamburger-btn hamburger-dropdown' onClick={() => setToggleDropdown(false)}>
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
    </svg>
    <li className='nav-list'>
      <a href="/" onClick={() => setToggleDropdown(false)}>Home</a>
      <a href="#about" onClick={() => setToggleDropdown(false)} >About</a> 
      <a href="#projects" onClick={() => setToggleDropdown(false)}>Projects</a>
      <a href="#contact" onClick={() => setToggleDropdown(false)}>Contact</a>
      <button type='button'  className='nav-btn'>Resume</button>
    </li>
  </div>
 ): (
  // Hamburger button
  <a onClick={() => setToggleDropdown(true)}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='hamburger-btn'>
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
    </svg>
  </a>
 )}
  
</nav>
  )
}

// When i view on desktop 
  // All items in nav appear in the center of the nav bar
  // Nav brand will be in the top left 
  // A resume button to download resume in top right 
  
// When i view nav in smaller screen 
  // I see a hamburger button, when i click hamburger button
    // toggle dropdown will display and will show clickable nav items: About, Projects, COntact and Resume button 

// hide nav bar itmes except branding
// display the correct size hamburger btn and display top right -- wrap an <button> tag to listen to onclick 
// when burger button is clicked, setToggleDropdown to true
//  {toggleDropdown && ( 
// ): (
// )

