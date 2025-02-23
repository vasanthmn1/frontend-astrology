import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from '../../store'
import { PageHandle } from "../../../interface/page/Ipage"
import { PageAction } from "../../../action/page/PageAction"
export interface SignUpState extends PageHandle {

    email: string
    password: string
    conformPassword: string

}

const initialState: SignUpState = {
    email: "",
    password: "",
    conformPassword: "",
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

export const selectCount = (state: RootState) => state.counter.value

export default registerSlice.reducer
