import React from 'react'
import { Link } from 'react-router-dom'
import './adminHeader.css'
import classes from './adminHeader.module.css'
import { AiOutlineBell } from 'react-icons/ai'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const AdminHeader = () => {
    const { user } = useSelector((state) => state.auth)
    console.log(user);
    const dispatch = useDispatch()
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

                    <div className={classes.notification}>
                        <AiOutlineBell className={classes.logout} />
                        <Badge bg="danger" className={classes.badge}>
                            {user.notifaction.length}
                        </Badge>
                    </div>
                    <div>
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="Profile" />
                        <span>{user.username}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader
