import React, { useEffect, useState } from 'react'
import classes from './appointment.module.css'
import { TimePicker, message } from 'antd'
import { useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isLoading, loginSuccess, loginSuccessToken, stopLoading } from '../../redux/features/AuthSclice'
import { Col, Row } from 'react-bootstrap'
const Appointment = () => {

    const { link } = useSelector((state) => state.link)
    // const { user } = useSelector((state) => state.auth)

    const navigater = useNavigate()
    const dispatch = useDispatch()
    const [err, setErr] = useState(false)
    let myFormik = useFormik({
        initialValues: {

            name: "",
            email: "",
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

            if (!values.email) {
                err.email = "Enter full email"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                err.email = 'Invalid email address !!';
            }

            return err
        },

        onSubmit: async (values) => {
            setErr(false)
            dispatch(isLoading())
            try {
                console.log(values);
                const res = await axios.post(`${link}/user/apply`, values)
                console.log(res);
                // message.success('Login Success')
                // console.log(res.data.user.token
                // );
                // localStorage.setItem('user', JSON.stringify(res.data.user.user))
                // localStorage.setItem('token', JSON.stringify(res.data.user.token))

                // if (res.data.user.user?.isAdmin === true) {
                //     navigater('/admin')
                //     // navigater('')
                // } else {
                //     navigater('/home')
                // }


                // dispatch(loginSuccess([res.data.user.user,]))
                // dispatch(loginSuccessToken([
                //     res.data.user.token
                // ]))

                dispatch(stopLoading())
            } catch (error) {
                // console.log(error);
                // dispatch(stopLoading())
                // setErr(toast.error('Email or Password wrong'))
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
                        <Col lg='4'>
                            <label >Name:</label>
                            <input
                                className={
                                    myFormik.errors.name && myFormik.touched.name ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='text'
                                placeholder={myFormik.errors.name && myFormik.touched.name ? myFormik.errors.name : "Enter Full Email.."}

                                value={myFormik.values.name}
                                name='name'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.name && myFormik.touched.name ? myFormik.errors.name : null} </div>

                        </Col>
                        <Col lg='4'>
                            <label >Email:</label>
                            <input
                                className={
                                    myFormik.errors.email && myFormik.touched.email ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='text'
                                placeholder={myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : "Enter Full Email.."}

                                value={myFormik.values.email}
                                name='email'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : null} </div>

                        </Col>
                        <Col lg='4'>
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
                        <Col lg='8'>
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
                        {/* <Col lg='8'>
                            <label >Adderess:</label>
                            <input
                                className={
                                    myFormik.errors.email && myFormik.touched.email ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='time'
                                placeholder={myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : "Enter Full Email.."}

                                value={myFormik.values.email}
                                name='email'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : null} </div>
                            <TimePicker.RangePicker />
                        </Col> */}
                    </Row>
                    <div className={classes.btn}>
                        <button type='submit' >
                            Login
                        </button>
                    </div>
                </form>
            </div>



        </div>
    )
}

export default Appointment