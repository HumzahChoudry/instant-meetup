import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="" className="nav-bar">
          <Link to="/home" className="brand-logo-div">
            <img
              src={require("../css/gather-nav.png")}
              className="brand-logo"
            />
          </Link>
          <div className="nav-links">
            {props.user.id ? (
              <li>
                <button className="nav-link" onClick={props.logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-link">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-link">
              <a href="#meetups">Meetups</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};
//https://image.ibb.co/gQZtk7/Gather_logo_finished_v3.jpg
export default Navbar;
