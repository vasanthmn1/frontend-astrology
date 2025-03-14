import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from '../../store'
import { PageHandle } from "../../../interface/page/Ipage"
import { PageAction } from "../../../action/page/PageAction"
export interface SignUpState extends PageHandle {

    email: string
    name: string
    password: string
    // conformPassword: string
    showPassword: boolean
}

const initialState: SignUpState = {
    email: "",
    password: "",
    name: "",
    // conformPassword: "",
    showPassword: false,
    ...PageAction.defaultPage()

}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<SignUpState>) => {
            Object.assign(state, action.payload);
        },

    }
})

export const { changeState } = registerSlice.actions;

export const selectRegisterState = (state: RootState) => state.register;

export default registerSlice.reducer
