import { createSlice } from '@reduxjs/toolkit'


const user = JSON.parse(localStorage.getItem('user'))
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
    user: user ? user : null,
    token: token ? token : null,
    isLoading: false,
    isstopLoading: false,

}
const AuthSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoading = true
            state.user = action.payload

        },
        loginSuccessToken: (state, action) => {
            state.isLoading = true
            state.token = action.payload
        },
        logoutuser: (state, action) => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            state.user = null;
            state.token = null;
        },
        isLoading: (state, action) => {
            state.isLoading = true
        },
        stopLoading: (state, action) => {
            state.isLoading = false
        }
    }
})

export const { stopLoading, loginSuccess, loginSuccessToken, logoutuser, isLoading } = AuthSlice.actions

export default AuthSlice.reducer