import React, { useState } from 'react';
import '../Navbar.css'; 
import {Link, useLocation} from 'react-router-dom'


function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const hiddenRoutes = ['/portal/','/portal','/portal/dash','/portal/profile','/congrat','/portal/pay','/portal/course','/portal/payhistory','/portal/notice','/portal/help','/portal/chat', '/about'];
  const isHidden = hiddenRoutes.includes(location.pathname);

  const hide = () => {
    document.querySelector('.dropdown-content').style.display = 'none';
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  const showDropdown = () => {
    const screenWidth = window.innerWidth;
    document.querySelector('.dropdown-content').style.display = 'block';
    
    if (screenWidth <= 769) {
      document.querySelector('.dropdown-content').style.marginTop = '61px';
    }
    //  else if  (screenWidth <= 1280) {
    // //   document.querySelector('.dropdown-content').style.marginTop = '61px';
    // // }
  }

  const hideDropdown = () => {
    document.querySelector('.dropdown-content').style.display = 'none';
  }
  
  

  let myPortal = {
    position: 'fixed',
    padding: '10px',
    marginLeft: '-10px',
    // marginTop: '40px',
    background: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))"
  }
  

  return isHidden ? null : (
    <>
    <nav className="navbar text-white sm:ms-0 bg-cyan-800 z-10 sticky top-0">
      <span className='font-bold'>UNIVERSITY</span><button className="toggle-button text-white  block md:hidden" onClick={toggleNavbar}>
        &#9776;
      </button>
      <ul className={`navbar-items ${isOpen ? 'active' : ''} sm:ps-3 bg-cyan-800 my-8`}>
        <div className='ms-5 sm:ms-3'><Link to="/">Home</Link></div>
        <div className='ms-5 sm:ms-3'><Link to="/portal/dash">Dashboard</Link></div>
        <ul className='ms-5 sm:ms-3  flex flex-row'>
        <li  onMouseOver={showDropdown}>Portal</li>
        <li style={myPortal} onClick={hide} className={"dropdown-content hidden shadow-2xl lg:mt-12 md:mt-16 sm:my-8 bg-cyan-800"} onMouseOut={hideDropdown} onMouseOver={showDropdown}>
            <div><Link  className='text-cyan-800 font-bold' to="/student/signup">Student</Link></div>
            <div><Link className='text-cyan-800 font-bold' to="">Admin</Link></div>
        </li>
        </ul>
        <div className='ms-5 sm:ms-3'><Link to="/about">About</Link></div>
      </ul>
    </nav>
    </>
    
  );
}

export default Navbar; 