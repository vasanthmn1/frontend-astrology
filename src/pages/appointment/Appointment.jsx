import React, { useEffect, useState } from 'react'
import classes from './appointment.module.css'
// import {  message } from 'react-toastify'
import { useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isLoading, stopLoading } from '../../redux/features/AuthSclice'
import { Col, Row } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd'
const Appointment = () => {

    const { link } = useSelector((state) => state.link)
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [err, setErr] = useState(false)

    useEffect(() => {

    }, [])
    let myFormik = useFormik({
        initialValues: {

            name: "",
            email: user?.email,
            phone: "",
            address: "",
            times: "",
            date: ""
        },
        validate: (values) => {
            let err = {}


            if (!values.name) {
                err.name = "Enter Full name"
            }

            if (!values.phone) {
                err.phone = "Enter Moblie Number"
            }
            if (!values.address) {
                err.address = "Fill your adderess"
            }


            if (!values.times) {
                err.times = "required "
            }
            if (!values.date) {
                err.date = "required "
            }
            if (values.times === "00:00") {
                err.times = "required "
            }

            return err
        },

        onSubmit: async (values) => {

            dispatch(isLoading())
            try {
                const res = await axios.post(`${link}/user/apply`, values, {
                    userId: user._id
                })

                message.success("applayed Conform")

                navigate('/notifiction')

                dispatch(stopLoading())
            } catch (error) {

            }
        }
    })



    return (
        <div className={classes.container}>
            <ToastContainer />
            <div className={classes.warper}>
                <h4> Login</h4>
                <form className={classes.form} onSubmit={myFormik.handleSubmit}>
                    <Row>
                        <Col lg='4' className={classes.box}>
                            <label >Name:</label>
                            <input
                                className={
                                    myFormik.errors.name && myFormik.touched.name ? classes.warinng : classes.success || classes.box}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='text'
                                placeholder={myFormik.errors.name && myFormik.touched.name ? myFormik.errors.name : "Enter Full Email.."}

                                value={myFormik.values.name}
                                name='name'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.name && myFormik.touched.name ? myFormik.errors.name : null} </div>

                        </Col>
                        <Col lg='4' className={classes.box}>
                            <label >Email:</label>
                            <input
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='text'
                                disabled
                                value={myFormik.values.email}
                                name='email'
                            />


                        </Col>
                        <Col lg='4' className={classes.box}>
                            <label >Phone:</label>
                            <input
                                className={
                                    myFormik.errors.phone && myFormik.touched.phone ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='number'
                                placeholder={myFormik.errors.phone && myFormik.touched.phone ? myFormik.errors.phone : "Enter Full Email.."}

                                value={myFormik.values.phone}
                                name='phone'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.phone && myFormik.touched.phone ? myFormik.errors.phone : null} </div>

                        </Col>
                        <Col lg='8' className={classes.textarea}>
                            <label >Address:</label>
                            <textarea
                                className={
                                    myFormik.errors.address && myFormik.touched.address ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='naddress'
                                placeholder={myFormik.errors.address && myFormik.touched.address ? myFormik.errors.address : "Enter Full Email.."}

                                value={myFormik.values.address}
                                name='address'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.address && myFormik.touched.address ? myFormik.errors.address : null} </div>

                        </Col>
                        <Col lg='2' className={classes.timer}>
                            <input
                                type='date'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.date}

                                name='date'
                                className={
                                    myFormik.errors.date && myFormik.touched.date ? classes.warinng : classes.success}

                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.date && myFormik.touched.date ? myFormik.errors.date : null} </div>
                        </Col>
                        <Col lg='2' className={classes.timer}>
                            <input
                                type='time'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.times}

                                name='times'
                                className={
                                    myFormik.errors.times && myFormik.touched.times ? classes.warinng : classes.success}

                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.times && myFormik.touched.times ? myFormik.errors.times : null} </div>
                        </Col>

                    </Row>
                    <div className={classes.btn}>
                        <button type='submit' >
                            Submit
                        </button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default Appointment