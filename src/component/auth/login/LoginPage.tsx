import React from 'react'

import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Link } from 'react-router-dom';


export const LoginPage = () => {
    return (
        <div className=' login-section'>
            <div className="container-content">
                <div className="row">
                    <div className="col-lg-4 col-lg-1"></div>
                    <div className="col-lg-8 col-sm-11">
                        <div className="wrapper">
                            <div className="form-box">
                                <h3 >Login</h3>
                                <TextField className='input' name='email' label="Email" />
                                <TextField className='input' name='password' label="password" />
                                <p className='login-link'>
                                    Don't have an account?
                                    <Link to={'/register'}>
                                        register now
                                    </Link>
                                </p>
                                <div className='button'>
                                    <button type='submit' >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
