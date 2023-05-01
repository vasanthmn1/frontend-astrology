import React, { useState } from 'react'
import classes from './adminSidebar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { FcCdLogo } from 'react-icons/fc'
import { AiOutlineUserAdd } from 'react-icons/ai'


const AdminSidbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
        const sidebar = document.querySelector(`.${classes.sidebar}`);
        if (sidebar) {
            sidebar.style.width = isDropdownOpen ? '80px' : '180px';
        }
    }

    const list = [
        {
            path: "/admin",
            title: 'home',
            icon: <FcCdLogo />
        },
        {
            path: "/appoinment",
            title: 'Appoimenns',
            icon: < AiOutlineUserAdd />
        },
    ]

    return (
        <aside className={classes.sidebar} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            {
                list.map((val, idx) => {
                    return (
                        <ul key={idx}>
                            <li>
                                <NavLink to={val.path}
                                    className={navClass => navClass.isActive ? classes.active : classes.unactive}

                                >
                                    {val.icon}
                                    {isDropdownOpen && (

                                        <span>{val.title}</span>

                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    )
                })
            }


            {/* <li>
                    <Link to="/admin">
                        <FcCdLogo />
                        {isDropdownOpen && (

                            <span>Home</span>

                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/appoinment" >
                        <AiOutlineUserAdd />
                        {isDropdownOpen && (

                            <span className='title'>Appoimenns</span>


                        )}
                    </Link>
                </li>
                <li>
                    <Link to="/products" >
                        <AiOutlineUserAdd />
                        {isDropdownOpen && (
                            <span>Hello</span>
                        )}
                   
                    </Link>
                </li> */}

        </aside>
    )
}

export default AdminSidbar
