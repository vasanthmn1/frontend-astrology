import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from '../../store'
export interface LoginState {
    isLoading: boolean
    internalErrorMessage: string,
    isInternalError: boolean,
    isSubmitting: true,
    submittingMessage: string
    email: string
    password: string
}

const initialState: LoginState = {
    internalErrorMessage: "",
    isInternalError: false,
    isLoading: true,
    isSubmitting: true,
    submittingMessage: "",
    email: "",
    password: "",

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

export const selectCount = (state: RootState) => state.counter.value

export default loginSlice.reducer
