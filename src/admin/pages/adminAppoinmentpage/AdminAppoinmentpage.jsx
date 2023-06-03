import React, { useEffect, useState } from 'react'
import classes from './adminAppoinmentpage.module.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { Button } from 'react-bootstrap';
import DeletePop from '../../../components/deletepop/DeletePop';
import { isLoading, stopLoading } from '../../../redux/features/AuthSclice';
const AdminAppoinmentpage = () => {
    const { link } = useSelector((state) => state.link)
    const navigator = useNavigate()
    const [notifaction, setNotifaction] = useState([])
    const [notifactionid, setNotifactionid] = useState()
    const [pop, SetPop] = useState(false)

    const dispatch = useDispatch()

    const [isDataFetched, setIsDataFetched] = useState(false);
    useEffect(() => {
        if (!isDataFetched) {
            getAdmin();
        }

    }, [isDataFetched])

    const getAdmin = async () => {
        try {
            dispatch(isLoading())
            const admin = await axios.get(`${link}/auth/getadmin`);
            const notifi = admin.data.user;
            setNotifaction(notifi);
            setIsDataFetched(true)
            dispatch(stopLoading())
        } catch (error) {
            console.error(error);
        }
    };

    const handelDelete = async () => {
        try {
            const admin = await axios.delete(`${link}/user/delnotifications/${notifactionid}`);
            console.log(admin);
            SetPop(false)
            getAdmin()
        } catch (error) {
            console.log(error);
        }
    }

    const handelApproved = async (id) => {
        try {
            const admin = await axios.post(`${link}/user/appoverdnotifications/${id}`);
            console.log(admin);

            getAdmin()
        } catch (error) {
            console.log(error);
        }
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
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>

                                <th>Time</th>
                                <th>E-mail</th>
                                <th>Mobile</th>
                                <th> status </th>
                                <th className={classes.actiontd} > Action </th>


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
                                            <td>{val.data.phone}</td>
                                            {/* <td>{val.data.status}</td> */}

                                            {val.data.status === "Appoverd" ? (
                                                <td className={classes.Appoverd}><button>{val.data.status}</button></td>
                                            ) : val.data.status === "pending" ? (
                                                <td className={classes.pending}><button>{val.data.status}....</button></td>
                                            ) : null}
                                            <td>
                                                {
                                                    val.data.status == "Appoverd" ? null :
                                                        <button className='btn  btn-success me-5'
                                                            onClick={() => handelApproved(val.data.userId)}
                                                        >Approved</button>
                                                }

                                                <button className='btn  btn-danger' onClick={() => {
                                                    SetPop(true)
                                                    setNotifactionid(val.data.userId)
                                                }}>Reject</button>

                                            </td>



                                        </tr>
                                    )
                                })
                            }
                        </tbody>


                    </table>
                </section>
            </main>
            {
                pop ?
                    <DeletePop>
                        <div className={classes.logoutbox}>
                            <h5>  Delete Appointment</h5>
                            <div className={classes.logoutbtn}>

                                <h5 className={classes.logoutDel}
                                    onClick={() => handelDelete()}
                                >Delete</h5>
                                <h5 className={classes.logoutChannel}
                                    onClick={() => SetPop(false)}
                                >channel</h5>

                            </div>

                        </div>
                    </DeletePop>
                    : null
            }
        </div>
    )
}

export default AdminAppoinmentpage
