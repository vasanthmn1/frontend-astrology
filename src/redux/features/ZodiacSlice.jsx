import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    postLoading: false,
    poststopLoading: false,
    getallposts: [],
    getsinglepost: {}


}
const ZodiacSlice = createSlice({
    name: 'zodiac',
    initialState,
    reducers: {
        isLoading: (state, action) => {
            state.postLoading = true
        },
        stopLoading: (state, action) => {
            state.postLoading = false
        },
        getallpost: (state, action) => {
            state.postLoading = false
            state.getallposts = action.payload

        },
        getsingle: (state, action) => {
            state.postLoading = false
            state.getsinglepost = action.payload

        },
    }
})

export const { getallpost, isLoading, stopLoading, getsingle } = ZodiacSlice.actions

export default ZodiacSlice.reducer