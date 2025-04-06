import { configureStore } from '@reduxjs/toolkit'

import zodiacListReducer from './features/zodiac/zodiacListSlice'
import loginReducer from './features/auth/LoginSlice'
import registerReducer from './features/auth/RegisterSlice'
import AppointmentFormReducer from './features/appointment/AppointmentFormSlice'
import adminZodiacListReducer from './features/admin/zodiac/zodiacListSlice'


export const store = configureStore({
    reducer: {
        //Auth
        login: loginReducer,
        register: registerReducer,
        appointmentForm: AppointmentFormReducer,
        zodiacListSlice: zodiacListReducer,
        adminZodiacListSlice: adminZodiacListReducer
    }

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store