import React, { useEffect, useState } from 'react'
import classes from './adminAppoinmentpage.module.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { Button } from 'react-bootstrap';
const AdminAppoinmentpage = () => {
    const { user } = useSelector((state) => state.auth)
    const { link } = useSelector((state) => state.link)
    const navigator = useNavigate()
    const [notifaction, setNotifaction] = useState([])

    const dispatch = useDispatch()
    console.log(notifaction.notifaction);
    const [isDataFetched, setIsDataFetched] = useState(false);
    useEffect(() => {
        if (!isDataFetched) {
            getAdmin();
        }
        // getAdmin();
    }, [isDataFetched])
    console.log(notifaction);

    const getAdmin = async () => {
        try {
            const admin = await axios.get(`${link}/auth/getadmin`);
            const notifi = admin.data.user;
            // console.log(notifi);
            // if (Array.isArray(notifi)) {
            setNotifaction(notifi);
            setIsDataFetched(true)
        } catch (error) {
            console.error(error);
        }
    };
    const handeldel = async (val) => {
        const admin = await axios.delete(`${link}/user/deleteallnoti`, val);
        console.log(admin);
        console.log(val);
    }
    return (
        <div className={classes.container}>
            {/* <ToastContainer /> */}
            <main className={classes.table}>
                <section className={classes.table__header}>


                </section>
                <section className={classes.table__body}>
                    <table>
                        <thead className={classes.thead}>
                            <tr>
                                <th>#  </th>
                                <th>Name</th>
                                <th>Date</th>

                                <th>Time</th>
                                <th>E-mail</th>
                                <th> status </th>
                                <th className={classes.actiontd} > Action </th>
                                <th  >  </th>

                                {/* <th>Number</th>
                        <th>Message</th>
                        <th>action</th> */}


                            </tr>
                        </thead>
                        <tbody className={classes.tbody}>

                            {
                                notifaction.notifaction?.map((val, idx) => {
                                    return (
                                        <tr key={idx} className={classes.notificationBox}>
                                            <td>{idx + 1}</td>
                                            <td className={classes.list}>{val.data.name} </td><td>
                                                {moment(val.data.date).format("DD-MM-YYYY")}
                                            </td>
                                            <td>{val.data.times}</td>
                                            <td>{val.data.email}</td>

                                            <td>{val.data.status}</td>
                                            <td><button className='btn  btn-success me-5'>Approved</button>
                                                <button className='btn  btn-danger'>Reject</button>

                                            </td>
                                            {/* <td ></td> */}

                                            {/* {val.data.userId} */}
                                            {/* <button
                                        onClick={() => handeldel(val.data.userId)}
                                    >
                                        Del
                                    </button> */}


                                        </tr>
                                    )
                                })
                            }
                        </tbody>


                    </table>
                </section>
            </main>
        </div>
    )
}

export default AdminAppoinmentpage
