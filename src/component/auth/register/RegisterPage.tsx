import { Component } from 'react'

import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { SignupAction } from '../../../action/auth/signup/SignupAction';
import { RootState } from '../../../redux/store';

import { useSelector } from 'react-redux';
import { HookParams } from '../../../interface/HookParams';
import { SignUpState } from '../../../redux/features/auth/RegisterSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export class RegisterPage extends Component<HookParams<SignUpState>> {


    action = new SignupAction(this)
    state = this.action.getDefaultState();


    componentDidUpdate(prevProps: HookParams<SignUpState>) {
        if (prevProps.state !== this.props.state) {
            this.setState({ ...this.props.state });
        }
    }

    showPassword = () => {
        let state = this.state
        let newState = { ...state, showPassword: !state.showPassword }

        this.action.changeState(newState)
    }

    render() {

        return (
            <div className='signup-section '>
                <div className="container-content">
                    <div className="row">
                        <div className="col-lg-4 col-lg-1"></div>
                        <div className="col-lg-8 col-sm-11">
                            <div className="wrapper">
                                <div className="form-box">
                                    <h3 >Register </h3>
                                    <TextField onChange={(e) => {
                                        this.action.onChangeInput(e)

                                    }}
                                        value={this.state.name}
                                        className='input' name='name' label="User Name" />
                                    <TextField onChange={(e) => {
                                        this.action.onChangeInput(e)
                                    }}

                                        value={this.state.email}

                                        className='input' name='email' label="Email" />
                                    <TextField
                                        type={this.state.showPassword ? 'text' : 'password'}

                                        value={this.state.password}

                                        slotProps={{
                                            input: {
                                                endAdornment: <InputAdornment position="end">
                                                    <IconButton onClick={() => this.showPassword()} edge="end">
                                                        {this.state.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            },
                                        }}
                                        className='input' name='password' label="password" onChange={(e) => this.action.onChangeInput(e)} />

                                    <p className='login-link'>
                                        already have an account?
                                        <Link to={'/login'}>
                                            Register
                                        </Link>
                                    </p>
                                    <div className='button'>
                                        <button type='submit' onClick={this.action.submit.submit} >
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


    return <RegisterPage state={currentState}
        navigate={useNavigate()}
        params={useParams()} location={useLocation()} />

};


