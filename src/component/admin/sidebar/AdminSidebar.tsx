import { useState } from 'react'

import { Link, NavLink, } from 'react-router-dom'

import { AiFillHome, AiOutlineUserAdd } from 'react-icons/ai'
import { BsListNested } from 'react-icons/bs'
// import { LuLogOut } from 'react-icons/lu'


import { TbZodiacLibra } from 'react-icons/tb'

import { MdOutlineExitToApp } from 'react-icons/md'

import { localStorageAction } from '../../../action/localStorage/localStorageAction'




const AdminSidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const navigate = useNavigate()
    function handleDropdownToggle() {
        setIsDropdownOpen(!isDropdownOpen);
        const sidebar = document.querySelector(`.ad-sidebar`);
        if (sidebar) {
            sidebar.style.width = isDropdownOpen ? '80px' : '210px';
            // sidebar.className = isDropdownOpen ? 'w-80' : 'w- 210px';

        }

    }

    const list = [
        {
            path: "/admin-dashboard",
            title: 'home',
            icon: <AiFillHome />
        },
        {
            path: "/appointment",
            title: 'appointment',
            icon: < AiOutlineUserAdd />
        },
        // {
        //     path: "/zodiacs",
        //     title: 'Zodiac ',
        //     icon: < TbZodiacLibra />
        // },
        {
            path: "/zodiacs",
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
        localStorageAction.clearStorage()
    }
    return (
        <aside className={"ad-sidebar"} onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            {
                list.map((val, idx) => {
                    return (
                        <ul key={idx}>
                            <li

                                onClick={() => val.title == "Exit" && exit()}>
                                <NavLink to={val.path}
                                    className={navClass => navClass.isActive ? "active" : "un-active"}

                                >
                                    <span> {val.icon}</span>
                                    {isDropdownOpen && (

                                        <span className={"title"}>{val.title}</span>

                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    )
                })
            }


        </aside>
    )
}

export default AdminSidebar
