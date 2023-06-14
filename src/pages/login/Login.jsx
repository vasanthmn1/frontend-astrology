import React, { useEffect, useState } from 'react'
import classes from './loginpage.module.css'
import { message } from 'antd'
import { Row, Col, Container } from 'react-bootstrap'

import { useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import 'react-toastify/dist/ReactToastify.css';
import { isLoading, loginSuccess, loginSuccessToken, stopLoading } from '../../redux/features/AuthSclice'


import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material'


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const { link } = useSelector((state) => state.link)


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
                err.email = "  email required"
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
                setErr(toast.error('Email or Password wrong', {
                    theme: "colored"
                }))
            }
        }
    })



    return (

        <div className={classes.container}>
            <ToastContainer />
            {/* <div className={classes.warper}>
                <h4> Login</h4>
                <form className={classes.form} onSubmit={myFormik.handleSubmit}>
                    <label>Email:</label>
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
                    <span className={classes.emailSpan}>  {myFormik.errors.email && myFormik.touched.email ? myFormik.errors.email : null} </span>
                    <label>Password:</label>
                    <input
                        className={
                            myFormik.errors.password && myFormik.touched.password ? classes.warinng : classes.success}
                        autoComplete="on"
                        name='password'
                        onBlur={myFormik.handleBlur}
                        onChange={myFormik.handleChange}
                        type='password'

                        value={myFormik.values.password}
                        placeholder={myFormik.errors.password && myFormik.touched.password ? myFormik.errors.password : "Enter Password"}

                    />
                    {err && <p style={{ color: "red", paddingTop: "10px" }}>somting Worong !!!!</p>}

                    <p className={classes.loginlink}>
                        Already have a account?
                        <Link to={'/register'}>
                            register now
                        </Link>
                    </p>

                    <div className={classes.btn}>
                        <button type='submit' >


                            Login
                        </button>
                    </div>
                </form>
            </div> */}

            <div className={classes.containercontent}>
                <Row>
                    <Col lg='4' sm='1'>

                    </Col>
                    <Col lg='8' sm='11'>
                        <div className={classes.warper}>
                            <h3 >Login</h3>
                            <form onSubmit={myFormik.handleSubmit} className={classes.form}  >
                                <TextField
                                    error={myFormik.touched.email && !!myFormik.errors.email}
                                    onBlur={myFormik.handleBlur}
                                    onChange={myFormik.handleChange}
                                    name='email' label="Email" type='email'
                                    value={myFormik.values.email}
                                    helperText={myFormik.touched.email && myFormik.errors.email}
                                    className={classes.input}


                                    FormHelperTextProps={{
                                        style: {
                                            color: "red",
                                        },

                                    }}

                                />

                                <TextField
                                    FormHelperTextProps={{
                                        style: {
                                            color: "red",
                                        },

                                    }}
                                    label="Password"
                                    // type="password"
                                    name="password"
                                    value={myFormik.values.password}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}
                                    error={myFormik.touched.password && !!myFormik.errors.password}

                                    helperText={myFormik.touched.password && myFormik.errors.password}
                                    className={classes.input}
                                    type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <p className={classes.loginlink}>
                                    Don't have an account?
                                    <Link to={'/register'}>
                                        register now
                                    </Link>
                                </p>
                                <div className={classes.btn}>
                                    <button type='submit' >


                                        Login
                                    </button>
                                </div>
                            </form>

                        </div>
                    </Col>
                </Row>
            </div>


        </div>
    )
}




export default Login