import React, { useState } from 'react'
import classes from './adminSidebar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FcCdLogo } from 'react-icons/fc'
import { AiFillHome, AiOutlineUserAdd } from 'react-icons/ai'
import { BsListNested } from 'react-icons/bs'
// import { LuLogOut } from 'react-icons/lu'


import { TbZodiacLibra } from 'react-icons/tb'

import { MdOutlineExitToApp } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logoutuser } from '../../../redux/features/AuthSclice'




const AdminSidbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dipatch = useDispatch()
    // const navigate = useNavigate()
    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
        const sidebar = document.querySelector(`.${classes.sidebar}`);
        if (sidebar) {
            sidebar.style.width = isDropdownOpen ? '80px' : '210px';

        }

    }

    const list = [
        {
            path: "/admin",
            title: 'home',
            icon: <AiFillHome />
        },
        {
            path: "/appoinment",
            title: 'appoinment',
            icon: < AiOutlineUserAdd />
        },
        {
            path: "/zodiac",
            title: 'Zodiac Add',
            icon: < TbZodiacLibra />
        },
        {
            path: "/zodiaclist",
            title: 'Zodiac List',
            icon: < BsListNested />
        },
        {
            path: "/",
            title: 'Exit',
            icon: < MdOutlineExitToApp onClick={() => {

            }} />
        },
    ]
    const exit = () => {

    }
    return (
        <aside className={classes.sidebar} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            {
                list.map((val, idx) => {
                    return (
                        <ul key={idx}>
                            <li

                                onClick={() => val.title == "Exit" && dipatch(logoutuser())}>
                                <NavLink to={val.path}
                                    className={navClass => navClass.isActive ? classes.active : classes.unactive}

                                >
                                    <span> {val.icon}</span>
                                    {isDropdownOpen && (

                                        <span className={classes.title}>{val.title}</span>

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
