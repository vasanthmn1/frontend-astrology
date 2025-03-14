import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from '../../store'
import { PageAction } from "../../../action/page/PageAction"
import { PageHandle } from "../../../interface/page/Ipage"
export interface LoginState extends PageHandle {

    email: string
    password: string
    showPassword: boolean
}

const initialState: LoginState = {

    email: "",
    password: "",
    showPassword: false,
    ...PageAction.defaultPage()
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<LoginState>) => {
            Object.assign(state, action.payload);
        },

    }
})

export const { changeState } = loginSlice.actions;

export const selectRegisterState = (state: RootState) => state.register;

export default loginSlice.reducer
