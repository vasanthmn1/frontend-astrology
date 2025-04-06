import { Outlet } from "react-router-dom"
import AdminSidebar from "../component/admin/sidebar/AdminSidebar"
import AdminHeaderBar from "../component/admin/header/AdminHeaderbar"


const AdminPortal = () => {
    return (
        <div  >
            <AdminSidebar />
            <div className="ad-main-wrapper" >
                <AdminHeaderBar />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPortal
