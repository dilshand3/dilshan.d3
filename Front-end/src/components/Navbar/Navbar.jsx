import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon } from '../../assets/assest';

const Navbar = () => {
  return (
    <>
      <header className='header' id='header'>
        <nav className='nav-container'>
          <div className="logo"><Link to="#">dilshan.d3</Link></div>
          <div className="auth-system">
            <button className='login-register'>Login</button>
          </div>
        </nav>
        <div className="nav__menu">
          <ul >
            <li >
              <Link><img src={Icon.homeicon} alt="" /></Link>
            </li>
            <li>
              <Link><img src={Icon.usericon} alt="" /></Link>
            </li>
            <li>
              <Link><img src={Icon.notepadicon} alt="" /></Link>
            </li>
            <li>
              <Link><img src={Icon.experince} alt="" /></Link>
            </li>
            <li>
              <Link><img src={Icon.message} alt="" /></Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar