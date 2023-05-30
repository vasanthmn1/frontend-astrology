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
            <table>
                <thead>
                    <tr>
                        <th>#  </th>
                        <th>Name</th>
                        <th>Date</th>

                        <th>Time</th>
                        <th>E-mail</th>
                        <th> status </th>
                        <th className={classes.actiontd} > Action </th>


                        {/* <th>Number</th>
                        <th>Message</th>
                        <th>action</th> */}


                    </tr>
                </thead>
                <tbody></tbody>
                {sameValues.length > 0 ?
                    sameValues[0].notifaction?.map((val, idx) => (

                        <tr key={idx} className={classes.notificationBox}>
                            <td>{idx + 1}</td>
                            <td className={classes.list}>
                                {val.data.name}
                            </td>
                            <td>
                                {moment(val.data.date).format("DD-MM-YYYY")}
                            </td>
                            <td>{val.data.times}</td>
                            <td>{val.data.email}</td>

                            <td>
                                {
                                    val.data.status == "Reject" ?
                                        <button className='btn  btn-danger'>Reject</button> : val.data.status
                                }

                            </td>
                            <td>


                                <button className='btn  btn-success me-5'>Approved</button>


                            </td>
                            {/* <td ></td> */}

                            {/* {val.data.userId} */}
                            {/* <button
                        onClick={() => handeldel(val.data.userId)}
                    >
                        Del
                    </button> */}


                        </tr>

                    )) : <>

                        <h1>HEllo</h1>
                    </>}
            </table>
        </Container>
    )
}


export default ClientNotification