import { useRef, useEffect } from "react";
// import "./header.css";
import { Badge } from "react-bootstrap";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { MdOutlineExitToApp } from 'react-icons/md'
import { AiOutlineBell } from 'react-icons/ai'


import classes from './header.module.css'
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../../redux/features/AuthSclice";
import logo from '../../../assets/logo.png';
const NAV_LINKS = [
    {
        url: "/home",
        display: "Home"
    },



];



const Header = () => {


    const { user, getallusers } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {

    }, [user]);
    console.log(getallusers.length);
    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle(classes.active_menu)


    return (

        <header className={classes.header} >
            <div className={classes.conatiner}>
                <div className={classes.navigation} >
                    <div className={classes.logo}>
                        <img src={logo} />
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




                                    <NavLink to={'/appointment'} className={navClass => navClass.isActive ? classes.activeappointmentbtn : classes.inactiveappointmentbtn}>
                                        <button > Appointment</button>

                                    </NavLink>

                                    :
                                    <Link to={'/login'}

                                    >   <button className={classes.login}>
                                            Login
                                        </button></Link>
                            }

                        </div>
                        {
                            user ?
                                <>

                                    <div className={classes.notification}>
                                        <Link to='notifiction'>
                                            <AiOutlineBell className={classes.logout} />
                                            {getallusers.length >= 1 ?
                                                <Badge bg="danger" className={classes.badge}>   {getallusers.length}</Badge> : null}
                                        </Link>

                                    </div>
                                    <MdOutlineExitToApp
                                        onClick={() => {
                                            dispatch(logoutuser())
                                            navigate('/')
                                        }}
                                        title="logout" className={classes.logout} />
                                </> : null
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