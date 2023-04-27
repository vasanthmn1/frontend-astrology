import { useRef, useEffect } from "react";
// import "./header.css";
import { Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import classes from './header.module.css'
const NAV_LINKS = [
    {
        url: "/home",
        display: "Home"
    },
    {
        url: "/market",
        display: "Market"
    },

    {
        url: "/create",
        display: "Create"
    },

    {
        url: "/contact",
        display: "Contact"
    },


];




const Header = () => {

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add(classes.header_shrink)
            }
            else {
                headerRef.current.classList.remove(classes.header_shrink)
            }
        })
        return () => {
            // window.removeEventListener('scroll');
        }

    }, []);

    const menuRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle(classes.active_menu)


    return (

        <header className={classes.header} ref={headerRef}>
            <Container>
                <div className={classes.navigation} >
                    <div className={classes.logo}>
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
                            <button>
                                <Link to={'/login'}

                                >  Login</Link>
                            </button>
                        </div>
                        <span className={classes.mobile_menu}>
                            <FaBars onClick={toggleMenu} />
                        </span>
                    </div>
                </div>
            </Container>
        </header >
    );
};

export default Header;