import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import zodiacListReducer from './features/zodiac/zodiacListSlice'
import loginReducer from './features/auth/LoginSlice'
import registerReducer from './features/auth/RegisterSlice'


export const store = configureStore({
    reducer: {
        //Auth
        login: loginReducer,
        register: registerReducer,


        counter: counterReducer,
        zodiacListSlice: zodiacListReducer
    }

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store