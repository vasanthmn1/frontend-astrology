
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
    {
        url: "/home",
        display: "Home"
    },



];

const Header = () => {
    let user = true;
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        if (menuRef.current) {
            menuRef.current.classList.toggle("active-menu");
        }
    }

    return (

        <header className={"client-header-main"} >
            <div className={"wrapper"}>
                <div className={"navigation"} >
                    <div className={"logo"}>
                        {/* <img src={logo} /> */}
                    </div>
                    <div className={" nav-right"}>
                        <div className={" nav-menu"} ref={menuRef} onClick={toggleMenu}>
                            <ul className={"nav-list"}>
                                {
                                    NAV_LINKS.map((item, index) => (
                                        <li className={"nav-item"} key={index}>
                                            <NavLink to={item.url} className={navClass => navClass.isActive ? "active" : "inactive"}> {item.display} </NavLink>
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                        <div className={"group-btn "}>
                            {
                                user ?




                                    <NavLink to={'/appointment'} className={navClass => navClass.isActive ? "activeappointmentbtn" : "inactiveappointmentbtn"}>
                                        <button > Appointment</button>

                                    </NavLink>

                                    :
                                    <Link to={'/login'}

                                    >   <button className={"login"}>
                                            Login
                                        </button></Link>
                            }

                        </div>
                        {/* {
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
                        } */}

                        <span className="mobile-menu">
                            <FaBars
                            // onClick={toggleMenu} 
                            />
                        </span>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header