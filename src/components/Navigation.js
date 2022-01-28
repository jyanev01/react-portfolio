import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import App from '../App';
import AboutMe from '../pages/AboutMe';


const Navigation = () => {

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">

        <div className={`navbar-menu `}>
          <div className="navbar-start">
            <p className="navbar-item">
              JORDAN'S PORTFOLIO
            </p>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
            >
              Main
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About Me
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/portfolio"
            >
              Portfolio
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contact"
            >
              Contact Me
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/resume"
            >
              Resume
            </NavLink>



          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;