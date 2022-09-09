import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Navbar() {
  let location=useLocation();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Gif API</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/trending"?"active":""}`} to="/trending">Trending</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/random"?"active":""}`} to="/random">Random</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar