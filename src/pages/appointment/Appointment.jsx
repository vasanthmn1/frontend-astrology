import React, { useEffect, useState } from 'react'
import classes from './appointment.module.css'
import { message } from 'antd'
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

            email: "",
            password: "",
        },
        validate: (values) => {
            let err = {}

            if (!values.email) {
                err.email = "Enter full email"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                err.email = 'Invalid email address !!';
            }
            if (!values.password) {
                err.password = "Enter password"
            }
            return err
        },

        onSubmit: async (values) => {
            setErr(false)
            dispatch(isLoading())
            try {
                const res = await axios.post(`${link}/auth/login`, values)
                message.success('Login Success')
                console.log(res.data.user.token
                );
                localStorage.setItem('user', JSON.stringify(res.data.user.user))
                localStorage.setItem('token', JSON.stringify(res.data.user.token))

                if (res.data.user.user?.isAdmin === true) {
                    navigater('/admin')
                    // navigater('')
                } else {
                    navigater('/home')
                }


                dispatch(loginSuccess([res.data.user.user,]))
                dispatch(loginSuccessToken([
                    res.data.user.token
                ]))

                dispatch(stopLoading())
            } catch (error) {
                console.log(error);
                dispatch(stopLoading())
                setErr(toast.error('Email or Password wrong'))
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
                                    myFormik.errors.email && myFormik.touched.email ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='number'
                                placeholder={myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : "Enter Full Email.."}

                                value={myFormik.values.email}
                                name='email'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : null} </div>

                        </Col>
                        <Col lg='6'>
                            <label >Adderess:</label>
                            <textarea
                                className={
                                    myFormik.errors.email && myFormik.touched.email ? classes.warinng : classes.success}
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                type='number'
                                placeholder={myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : "Enter Full Email.."}

                                value={myFormik.values.email}
                                name='email'
                            />
                            <div className={classes.emailSpan}>  {myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : null} </div>

                        </Col>
                        <Col lg='8'>
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

                        </Col>
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