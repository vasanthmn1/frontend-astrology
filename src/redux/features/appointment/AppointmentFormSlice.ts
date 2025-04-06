import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RootState } from '../../store'
import { PageAction } from "../../../action/page/PageAction"
import { PageHandle } from "../../../interface/page/Ipage"
export interface AppointmentFormState extends PageHandle {

    email: string
    name: string
    form: {
        phone: string
        address: string,
        available_date: string
    }
}

const initialState: AppointmentFormState = {

    email: "",
    name: "",
    form: {
        available_date: "",
        phone: "",
        address: ""
    },
    ...PageAction.defaultPage()
}

export const appointmentFormSlice = createSlice({
    name: 'appointmentForm',
    initialState,
    reducers: {
        changeState: (state, action: PayloadAction<AppointmentFormState>) => {
            Object.assign(state, action.payload);
        },

    }
})

export const { changeState } = appointmentFormSlice.actions;

export const selectRegisterState = (state: RootState) => state.appointmentForm;

export default appointmentFormSlice.reducer
