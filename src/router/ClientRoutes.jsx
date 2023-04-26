import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Portal from '../pages/portal/Portal'

const ClientRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Portal />}>
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path='home' element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}

export default ClientRoutes
