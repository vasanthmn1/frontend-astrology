import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getalluser, stopLoading } from '../../redux/features/AuthSclice'
import classes from './clientNotification.module.css'
import moment from 'moment'



const ClientNotification = () => {
    // const [notification, SetNotification] = useState([])
    const { user, getallusers } = useSelector((state) => state.auth)
    const { link } = useSelector((state) => state.link)
    const dispatch = useDispatch()
    console.log(getallusers);

    useEffect(() => {
        getall()
    }, [])

    const getall = async () => {
        const { data } = await axios.get(`${link}/auth/getall`)
        dispatch(getalluser(data.user))
        dispatch(stopLoading())
    }
    // const findeall = getalluser?.map((val) => val)

    // console.log(findeall);
    const sameValues = getallusers.filter(item =>
        item.username === user.username
    );
    // updatedAt
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


                                {/* <th>Number</th>
                        <th>Message</th>
                        <th>action</th> */}


                            </tr>
                        </thead>
                        <tbody className={classes.tbody}>

                            {sameValues.length > 0 ?
                                sameValues[0].notifaction?.map((val, idx) => (


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
                                    </tr>


                                )) : <>

                                    <h1>HEllo</h1>
                                </>}
                        </tbody>


                    </table>
                </section>
            </main>

        </Container >
    )
}


export default ClientNotification