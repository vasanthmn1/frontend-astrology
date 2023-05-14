import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './adminHeader.css'
import classes from './adminHeader.module.css'
import { AiOutlineBell } from 'react-icons/ai'
import { Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import { isLoading, stopLoading } from '../../../redux/features/AuthSclice'
const AdminHeader = () => {
    const { user } = useSelector((state) => state.auth)
    const { link } = useSelector((state) => state.link)
    const navigator = useNavigate()
    const [notifaction, setNotifaction] = useState([])

    const dispatch = useDispatch()
    console.log(notifaction.notifaction);

    useEffect(() => {
        // const getadmin = async () => {
        //     const admin = await axios.get(`${link}/auth/getadmin`)
        //     setNotifaction(admin.data.user)
        // }
        // getadmin()



        getAdmin();
    }, [user,])
    const getAdmin = async () => {
        try {
            const admin = await axios.get(`${link}/auth/getadmin`);
            const notifi = admin.data.user;
            console.log(notifi);
            // if (Array.isArray(notifi)) {
            setNotifaction(notifi);
            // } else {
            //     setNotifaction([]);
            // }

            // setseeNotifaction(notifi?.seenotnotifaction);
            // dispatch(stopLoading());
        } catch (error) {
            console.error(error);
        }
    };
    const handelRead = async () => {
        // dispatch(isLoading())
        try {
            const notifi = await axios.post(`${link}/user/readnoti`, {
                userId: user._id,
            });
            console.log("not", notifi);
            navigator('/appoinment')
            // setNotifaction([])

            // dispatch(stopLoading())
        } catch (error) { }
    };



    return (
        <div>
            <nav className={classes.navbar}>
                <Link className="navbar-brand" to="/">
                    {/* <img src={logo} alt="Logo" /> */}
                    Logo
                </Link>
                <div className={classes.user_profile}>

                    <div className={classes.notification} onClick={() => {
                        // navigator('/notification')

                    }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" >
                                <AiOutlineBell className={classes.logout} />
                                <span className={classes.badge}

                                >
                                    {notifaction.notifaction?.length}
                                </span>
                            </Dropdown.Toggle>
                            {
                                notifaction.notifaction?.length >= 1 ?
                                    <Dropdown.Menu>

                                        {
                                            notifaction.notifaction && notifaction.notifaction.map((val, idx) => {
                                                return (
                                                    <div key={idx}>
                                                        {/* <Link to='/appoinment'> */}
                                                        <Dropdown.Item
                                                            onClick={() => handelRead()}

                                                        >{val.data.email}</Dropdown.Item>
                                                        {/* </Link> */}

                                                    </div>
                                                )
                                            })
                                        }
                                        {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                    </Dropdown.Menu>

                                    : null
                            }

                        </Dropdown>

                    </div>
                    <div>
                        {/* <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="Profile" /> */}
                        <span>{user.username}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader
