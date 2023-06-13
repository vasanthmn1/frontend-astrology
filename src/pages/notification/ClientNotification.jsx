import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getalluser, isLoading, stopLoading } from '../../redux/features/AuthSclice'
import classes from './clientNotification.module.css'
import { AiFillDelete } from 'react-icons/ai'
import moment from 'moment'



const ClientNotification = () => {
    // const [notification, SetNotification] = useState([])
    const { user, getallusers } = useSelector((state) => state.auth)
    const { link } = useSelector((state) => state.link)
    const dispatch = useDispatch()


    useEffect(() => {
        getall()
    }, [])

    const getall = async () => {

        try {
            dispatch(isLoading())
            const { data } = await axios.get(`${link}/user/usergetall/${user._id}`)
            dispatch(getalluser(data.filteredData))

            dispatch(stopLoading())
        } catch (error) {
            console.log(error);
            dispatch(stopLoading())
        }
    }

    const handelDelete = async (id) => {
        const del = await axios.delete(`${link}/user/${user._id}/notifications/${id}`)
        getall()
        console.log(del);
    }
    console.log(getallusers);
    return (
        <Container>

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
                                <th className={classes.statusntd}> status </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className={classes.tbody}>


                            {
                                (!getallusers || getallusers.length === 0) ?
                                    <tr>
                                        <td colSpan="7" className="text-center mt-5">
                                            No Appointment List
                                        </td>
                                    </tr>

                                    :
                                    getallusers?.map((val, idx) => (
                                        <tr key={idx} className={classes.notificationBox}>
                                            <td>{idx + 1}</td>
                                            <td className={classes.list}>{val.data.name} </td><td>
                                                {moment(val.data.date).format("DD-MM-YYYY")}
                                            </td>
                                            <td>{val.data.times}</td>
                                            <td>{val.data.email}</td>
                                            {val.data.status === "Reject" ? (
                                                <td className={classes.rejected}><button>{val.data.status}</button></td>
                                            ) : val.data.status === "pending" ? (
                                                <td className={classes.pending}><button>{val.data.status}...</button></td>
                                            ) : (
                                                <td className={classes.success}><button>{val.data.status}</button></td>
                                            )}
                                            <td>
                                                {val.data.status === "Reject" ?

                                                    <>
                                                        <AiFillDelete data-title="this is a textarea" className={classes.deletebtn} onClick={() => handelDelete(val.data.userId)} />
                                                        {/* <span className={classes.tooltiptext}>Tooltip text</span> */}
                                                    </>
                                                    : null}
                                            </td>
                                        </tr>


                                    ))
                            }
                        </tbody>


                    </table>
                </section>
            </main>

        </Container >
    )
}


export default ClientNotification