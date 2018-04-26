import React from 'react';
import { Link } from "react-router-dom";

const Header = props =>
    <div className="container header px-0">
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to='/' className="navbar-brand">Lyrics Finder</Link>
            <div className="" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                    </li>
                </ul>
            </div>
        </nav>
    </div>
 
export default Header;