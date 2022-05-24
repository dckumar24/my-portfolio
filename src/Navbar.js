import React from 'react';
import './Navbar.css';
import Logo from './assets/logo.jpg';


const Navbar=()=>{

   const navbarjsx=(
    
        <div className="nav-bar">

<div className="logo"><img src={Logo} alt="Dinesh" className="logo-img" /></div>

            {/* <div ><NavLink exact  to="/" className="navlink" activeClassName="active-navlink">Home</NavLink></div>
            <div > <NavLink to="/about" className="navlink" activeClassName="active-navlink">About</NavLink></div>
            <div ><NavLink to="/education" className="navlink" activeClassName="active-navlink">Education</NavLink></div>
            <div ><NavLink to="/skills" className="navlink" activeClassName="active-navlink">Skills</NavLink></div>
            <div ><NavLink to="/experience" className="navlink" activeClassName="active-navlink">Experience</NavLink></div>
            <div ><NavLink to="/hobbies" className="navlink" activeClassName="active-navlink">Hobbies</NavLink></div>
            <div ><NavLink to="/contact" className="navlink" activeClassName="active-navlink">Contact</NavLink></div> */}
        </div>
   
    );
    return navbarjsx;
}

export default Navbar;