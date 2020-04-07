import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({user,token}) => {
    let guestLinks, authLinks;

    if(!user && !token) {
        guestLinks = (
            <Fragment>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </Fragment>
        )
    }
    if(token && user){
        authLinks  = (
            <Fragment>
                 <li className="nav-item">
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            </Fragment>
        )
    }
    return(
        <div>
            <nav className="navbar-dark bg-dark navbar-expand-sm">
                <Link to="/" className="navbar-brand">B49-Blog</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav" 
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">All Posts</Link>
                        </li>
                        {authLinks}
                        {guestLinks}
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;
