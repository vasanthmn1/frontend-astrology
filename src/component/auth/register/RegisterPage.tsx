import React, { Component } from 'react'

import { TextField } from '@mui/material'
import { Link, useLocation, useParams } from 'react-router-dom';
import { SignupAction } from '../../../action/auth/signup/SignupAction';
import { RootState, store } from '../../../redux/store';
import { RegChild } from './RegChild';
import { useSelector } from 'react-redux';
import { HookParams } from '../../../interface/HookParams';
import { SignUpState } from '../../../redux/features/auth/RegisterSlice';


export class RegisterPage extends Component<HookParams<SignUpState>> {

    state = this.props.state;
    action = new SignupAction()

    componentDidUpdate(prevProps: HookParams<SignUpState>) {
        if (prevProps.state !== this.props.state) {
            this.setState({ ...this.props.state });
        }
    }

    render() {

        return (
            <div className='signup-section '>
                <div className="container-content">
                    <div className="row">
                        <div className="col-lg-4 col-lg-1"></div>
                        <div className="col-lg-8 col-sm-11">
                            <div className="wrapper">

                                <RegChild parent={this} />
                                <h1>++  {this.state.email}</h1>
                                <div className="form-box">
                                    <h3 >Register</h3>
                                    <TextField onChange={(e) => {
                                        this.action.onChangeInput(e)
                                    }} className='input' name='email' label="Email" />
                                    <TextField className='input' name='password' label="password" />
                                    <TextField className='input' name='conform_password' label="Conform password" />

                                    <p className='login-link'>
                                        already have an account?
                                        <Link to={'/login'}>
                                            Login now
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
}
export const RegisterPageFn = () => {
    const currentState = useSelector((state: RootState) => state.register);

    return <RegisterPage state={currentState} params={useParams()} location={useLocation()} />
};