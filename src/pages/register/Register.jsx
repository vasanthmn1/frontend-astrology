import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import classes from './register.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isLoading, stopLoading } from '../../redux/features/AuthSclice'
import { message } from 'antd'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
const Register = () => {

    const { link } = useSelector((state) => state.link)
    const dispatch = useDispatch()
    const [err, setErr] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const navigater = useNavigate()
    let myFormik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validate: (values) => {
            let err = {}
            if (!values.username) {
                err.username = "Fill Full Name"
            }
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
            dispatch(isLoading())
            setErr(false)
            try {
                const res = await axios.post(`${link}/auth/register`, values)
                if (res.data) {
                    navigater('/login');
                    message.success('Register Success')
                }
                dispatch(stopLoading())
            } catch (error) {
                dispatch(stopLoading())
                setErr(true)
                toast.error(error.response.data.massage, {
                    theme: 'colored'
                })
            }
        }

    })


    return (
        <div className={classes.container}>
            <ToastContainer />

            {/* <div className={classes.warper}> */}

            {/* <form className={classes.form} onSubmit={myFormik.handleSubmit}>
                    <label>Username:</label>
                    <input
                        className={
                            myFormik.errors.username && myFormik.touched.username ? classes.warinng : classes.success}
                        name='username'
                        onBlur={myFormik.handleBlur}
                        onChange={myFormik.handleChange}
                        type='text'
                        placeholder={myFormik.errors.username && myFormik.touched.username ? myFormik.errors.username : "Enter Username"}

                        value={myFormik.values.username}
                    />
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


                    <p className={classes.loginlink}>
                        Already have a account?
                        <Link to={'/login'}>
                            Login now
                        </Link>
                    </p>

                    <div className={classes.btn}>
                        <button type='submit'>Register</button>
                    </div>

                </form> */}

            <div className={classes.containercontent}>

                <Row>
                    <Col lg='4' sm='1'>

                    </Col>
                    <Col lg='8' sm='11'>
                        <div className={classes.warper}>
                            <h3 >Register</h3>
                            <form onSubmit={myFormik.handleSubmit} className={classes.form}  >
                                <TextField
                                    error={myFormik.touched.username && !!myFormik.errors.username}
                                    onBlur={myFormik.handleBlur}
                                    onChange={myFormik.handleChange}
                                    name='username' label="Username" type='username'
                                    value={myFormik.values.username}
                                    helperText={myFormik.touched.username && myFormik.errors.username}
                                    className={classes.input}


                                    FormHelperTextProps={{
                                        style: {
                                            color: "red",
                                        },

                                    }}

                                />
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
                                    You have an account?
                                    <Link to={'/login'}>
                                        Login
                                    </Link>
                                </p>
                                <div className={classes.btn}>
                                    <button type='submit' >

                                        Register
                                    </button>
                                </div>
                            </form>

                        </div>
                    </Col>
                </Row>
            </div>
            {/* </div> */}



        </div>
    )
}

export default Register
