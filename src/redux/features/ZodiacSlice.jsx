import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    postLoading: false,
    poststopLoading: false,
    getallposts: []

}
const ZodiacSlice = createSlice({
    name: 'zodiac',
    initialState,
    reducers: {
        isLoading: (state, action) => {
            state.postLoading = true
        },
        stopLoading: (state, action) => {
            state.poststopLoading = false
        },
        getallpost: (state, action) => {
            state.postLoading = false
            state.getallposts = action.payload

        },
    }
})

export const { getallpost, isLoading, stopLoading } = ZodiacSlice.actions

export default ZodiacSlice.reducer