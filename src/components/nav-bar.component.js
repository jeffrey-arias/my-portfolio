import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class TopNavBar extends Component {
    render() {
        return(
            <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav nav-fill w-100">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="Projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Contact">Contact</Link>
                    </li>
                    </ul>
                </div>
                </nav>

            </div>
        )
    }
}