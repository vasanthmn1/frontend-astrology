import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

    useEffect(() => {
        getAdmin();
    }, [user,])


    const getAdmin = async () => {
        try {
            const admin = await axios.get(`${link}/auth/getadmin`);
            const notifi = admin.data.user;

            setNotifaction(notifi);
        } catch (error) {
            console.error(error);
        }
    };
    const handelRead = async () => {

        try {
            navigator('/appoinment')

            window.location.reload()

        } catch (error) { }
    };



    return (
        <div>
            <nav className={classes.navbar}>
                <Link className="navbar-brand" to="/">

                    Logo
                </Link>
                <div className={classes.user_profile}>

                    <div className={classes.notification} onClick={() => {


                    }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" >
                                <AiOutlineBell className={classes.logout} onClick={() => handelRead()} />
                                <span className={classes.badge}

                                >
                                    {notifaction.notifaction?.length}
                                </span>
                            </Dropdown.Toggle>
                            {/* {
                                notifaction.notifaction?.length >= 1 ?
                                    <Dropdown.Menu>

                                        {
                                            notifaction.notifaction && notifaction.notifaction.map((val, idx) => {
                                                return (
                                                    <div key={idx}>

                                                        <Dropdown.Item
                                                            onClick={() => handelRead()}

                                                        >{val.data.email}</Dropdown.Item>

                                                    </div>
                                                )
                                            })
                                        }

                                    </Dropdown.Menu>

                                    : null
                            } */}

                        </Dropdown>

                    </div>
                    <div>

                        <span>{user.username}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader
