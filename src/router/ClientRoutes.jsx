import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Portal from '../pages/portal/Portal'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

const ClientRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Portal />}>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='home' element={<Home />} />
                </Route>
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes>
        </div>
    )
}

export default ClientRoutes
