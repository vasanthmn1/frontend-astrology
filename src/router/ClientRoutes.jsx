import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'

import Portal from '../pages/portal/Portal'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import { useSelector } from 'react-redux'
import Spiner from '../components/spiner/Spiner'
import AdminHome from '../admin/pages/AdminHome'

import AdminPortal from '../admin/pages/adminPortal/AdminPortal'
import AdminAppoinmentpage from '../admin/pages/adminAppoinmentpage/AdminAppoinmentpage'
import Appointment from '../pages/appointment/Appointment'

const ClientRoutes = () => {
    const { user, token, isLoading } = useSelector((state) => state.auth)
    console.log(user && user[0]?.isAdmin || user && user.isAdmin);
    return (
        <div>

            {
                isLoading && <Spiner />
            }

            <Routes>

                {
                    user && user[0]?.isAdmin || user && user?.isAdmin ?
                        <Route path='/' element={<AdminPortal />}>
                            <Route path='/home' element={<Navigate to='/admin' />} />
                            <Route path='admin' element={<AdminHome />} />
                            <Route path='appoinment' element={<AdminAppoinmentpage />} />

                        </Route>
                        :
                        <Route path='/' element={<Portal />}>
                            <Route path='/' element={<Navigate to='/home' />} />
                            <Route path='home' element={<Home />} />
                            {/* <Route path='appointment' element={<Appoi />} /> */}
                            <Route path='/appointment' element={<Appointment />} />

                        </Route>

                }


                {
                    user ?
                        <>
                            <Route path='/login' element={<Navigate to='/home' />} />
                            <Route path='/register' element={<Navigate to='/home' />} />
                        </>

                        :
                        <>
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                        </>
                }


            </Routes>
        </div>
    )
}

export default ClientRoutes
