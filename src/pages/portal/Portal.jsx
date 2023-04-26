import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

const Portal = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Portal