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

            {/* <thead className={classes.thead}> */}
            <ul className={classes.ul}>
                <li>#  </li>
                <li>Name</li>
                <li>Date</li>

                <li>Time</li>
                <li>E-mail</li>
                <li> status </li>
                <li className={classes.actiontd} > Action </li>


                {/* <th>Number</th>
                        <th>Message</th>
                        <th>action</th> */}


            </ul>


            {sameValues.length > 0 ?
                sameValues[0].notifaction?.map((val, idx) => (

                    <ul key={idx} className={classes.notificationBox}>
                        <li>{idx + 1}</li>
                        <li className={classes.list}>
                            {val.data.name}
                        </li>
                        <li>
                            {moment(val.data.date).format("DD-MM-YYYY")}
                        </li>
                        <li>{val.data.times}</li>
                        <li>{val.data.email}</li>

                        <li>
                            {
                                val.data.status == "Reject" ?
                                    <button className='btn  btn-danger'>Reject</button> : val.data.status
                            }

                        </li>
                        <li>


                            <button className='btn  btn-success me-5'>Approved</button>


                        </li>
                        {/* <td ></td> */}

                        {/* {val.data.userId} */}
                        {/* <button
                        onClick={() => handeldel(val.data.userId)}
                    >
                        Del
                    </button> */}


                    </ul>

                )) : <>

                    <h1>HEllo</h1>
                </>}

        </Container>
    )
}


export default ClientNotification