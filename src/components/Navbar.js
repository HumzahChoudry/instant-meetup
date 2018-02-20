import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

  const links = ['Home', 'Meetups', 'Login'].map(l => <li key={l}><a href="">{l}</a></li>)
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="" className="nav-bar">
          <li><a href="#" className="brand-logo">Logo</a></li>
          <div className="nav-links">
            <li className="nav-link"><Link to="/login" >Login</Link></li>
            <li className="nav-link"><Link to="/home" >Home</Link></li>
            <li className="nav-link"><Link to="/meetups" >Meetups</Link></li>
            </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
