
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'

import Portal from '../pages/portal/Portal'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import { useSelector } from 'react-redux'
import Spiner from '../components/loader/spiner/Spiner'
import AdminHome from '../admin/pages/home/AdminHome'

import AdminPortal from '../admin/pages/adminPortal/AdminPortal'
import AdminAppoinmentpage from '../admin/pages/adminAppoinmentpage/AdminAppoinmentpage'
import Appointment from '../pages/appointment/Appointment'
import Notification from '../admin/pages/notification/Notification'
import ClientNotification from '../pages/notification/ClientNotification'
import Zodiac from '../admin/pages/zodiac/Zodiac'
import ZodiacList from '../admin/pages/zodiacList/ZodiacList'
import ZodiacEdit from '../admin/pages/zodiacEdit/ZodiacEdit'
import ZodiacSignSingle from '../pages/zodiacSignSingle/ZodiacSignSingle'
import PageNotFound from '../utils/Accordion/pagenotefoung/PageNotFound'
import SingleZodiac from '../admin/pages/singleZodiac/SingleZodiac'

const ClientRoutes = () => {
    const { user, isLoading } = useSelector((state) => state.auth)

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
                            <Route path='/notification' element={<Notification />} />
                            <Route path='/zodiac' element={<Zodiac />} />
                            <Route path='/zodiaclist' element={<ZodiacList />} />
                            <Route path='/zodiaedit/:id' element={<ZodiacEdit />} />
                            <Route path='/siglezodiac/:id' element={<SingleZodiac />} />


                        </Route>
                        :
                        <Route path='/' element={<Portal />}>
                            <Route path='/' element={<Navigate to='/home' />} />
                            <Route path='home' element={<Home />} />
                            {/* <Route path='appointment' element={<Appoi />} /> */}


                            <Route path='/zodiac/:id' element={<ZodiacSignSingle />} />
                            {
                                user ?
                                    <>
                                        <Route path='/appointment' element={<Appointment />} />
                                        <Route path='/notifiction' element={<ClientNotification />} />
                                    </>
                                    : null}
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

                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default ClientRoutes
