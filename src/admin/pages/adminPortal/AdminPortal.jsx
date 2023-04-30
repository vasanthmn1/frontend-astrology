import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidbar from '../../components/adminsidebar/AdminSidbar'
import AdminHeader from '../../components/adminheader/AdminHeader'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './adminPortal.module.css'
const AdminPortal = () => {
    return (
        // <div>
        //     <div>
        //         <AdminHeader />
        //         <div>
        //             <AdminSidbar />
        //         </div>
        //         <Outlet />
        //     </div>

        // </div>
        <div className={classes.container} >
            {/* <Container > */}
            <AdminSidbar />
            <div className={classes.contant}>
                <AdminHeader />
                <Outlet />
                {/* <Switch>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/users">
                                <Users />
                            </Route>
                            <Route exact path="/products">
                                <Products />
                            </Route>
                        </Switch> */}
            </div>
            {/* </Row> */}
            {/* </Container> */}
        </div>
    )
}

export default AdminPortal
