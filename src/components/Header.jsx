import { useRef, useEffect } from "react";
// import "./header.css";
import { Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { MdOutlineExitToApp } from 'react-icons/md'

import classes from './header.module.css'
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../redux/features/AuthSclice";
const NAV_LINKS = [
    {
        url: "/home",
        display: "Home"
    },



];



const Header = () => {

    const headerRef = useRef(null)
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add(classes.header_shrink)
            }
            else {
                headerRef.current.classList.remove(classes.header_shrink)
            }
        })
        // return () => {
        //     window.removeEventListener('scroll');
        // }

    }, [user]);

    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle(classes.active_menu)


    return (

        <header className={classes.header} ref={headerRef}>
            <div className={classes.conatiner}>
                <div className={classes.navigation} >
                    <div className={classes.logo}>
                        s
                    </div>
                    <div className={classes.nav_right}>
                        <div className={classes.nav_menu} ref={menuRef} onClick={toggleMenu}>
                            <ul className={classes.nav_list}>
                                {
                                    NAV_LINKS.map((item, index) => (
                                        <li className={classes.nav_item} key={index}>
                                            <NavLink to={item.url} className={navClass => navClass.isActive ? classes.active : classes.inactive}> {item.display} </NavLink>
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                        <div className={classes.btn}>
                            {
                                user ?
                                    <button className={classes.appointmentbtn}>
                                        <Link to={'/login'}

                                        >  Appointment </Link>
                                    </button> :
                                    <button className={classes.login}>
                                        <Link to={'/login'}

                                        >  Login</Link>
                                    </button>
                            }

                        </div>
                        {
                            user ?
                                <MdOutlineExitToApp
                                    onClick={() => {
                                        dispatch(logoutuser())
                                    }}
                                    title="logout" className={classes.logout} /> : null
                        }

                        <span className={classes.mobile_menu}>
                            <FaBars onClick={toggleMenu} />
                        </span>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;