import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/features/counter/counterSlice'
import zodiacListReducer from './features/zodiac/list/zodiacListSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        zodiacListSlice: zodiacListReducer
    }

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store