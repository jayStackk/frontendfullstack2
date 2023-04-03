import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComponent() {
    const Search = require("../../assets/Search.png");
    const logo = require("../../assets/Logo.png");
    const Bell = require("../../assets/Bell.png");
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);




  return (

    
    <div className='NavContent'> 
        <header className='NavHeader'>
        <img className='NavLogo' src={logo}/>
        <nav className='navigation'>
            <a href=''>Main Feed</a>
            <a href=''>Profile</a>
            <a onClick={() => setIsSearchBarVisible(!isSearchBarVisible)}>Search</a>
            <button className="Bell"><img src={Bell}/>
            <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span></button>
            
            <button className='btnSignOut'>Logout</button>
            {isSearchBarVisible && (
  <form className='search-Bar'>
    <input type='text' placeholder='search...'/>
    <button className="search-img"><img  src={Search}/></button>
  </form>
)}
        </nav>
        
        </header>
        </div>
  )
}
