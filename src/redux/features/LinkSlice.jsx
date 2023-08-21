import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    link: import.meta.env.VITE_Link,
}
const LinkSlice = createSlice({
    name: 'link',
    initialState,
    reducers: {

    }
})



export default LinkSlice.reducer

    // .then(async (authUser) => {
    //     await axios.post(`${link}/auth/register`, {
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value
    //     })
    // })