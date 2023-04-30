import React from 'react'
import { Link } from 'react-router-dom'
import './adminHeader.css'
import classes from './adminHeader.module.css'
const AdminHeader = () => {
    return (
        <div>
            <nav className={classes.navbar}>
                <Link className="navbar-brand" to="/">
                    {/* <img src={logo} alt="Logo" /> */}
                    Logo
                </Link>

                {/* <ul>
                    <li>home</li>
                </ul> */}
                {/* <div className={classes.collapse} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div> */}
                <div className="user-profile">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="Profile" />
                    <span>John Doe</span>
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader
