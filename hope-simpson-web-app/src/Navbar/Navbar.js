import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-wrapper sticky-top">
      <div className="container navbar-container">
        <div className="row-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content"
                    aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav">
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink exact className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink exact className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink className="nav-link" to="/map/tableau">Tableau Map</NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink exact className="nav-link" to="/map/gds">GDS Map</NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink className="nav-link" to="/modeling">Modeling</NavLink>
                </li>
                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                  <NavLink exact className="nav-link" to="/team">Team</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
