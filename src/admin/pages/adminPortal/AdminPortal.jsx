import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidbar from '../../components/adminsidebar/AdminSidbar'
import AdminHeader from '../../components/adminheader/AdminHeader'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './adminPortal.module.css'
const AdminPortal = () => {
    return (
        <div className={classes.container} >
            <AdminSidbar />
            <div className={classes.contant}>
                <AdminHeader />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPortal
