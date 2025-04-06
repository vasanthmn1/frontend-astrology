import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import ClientHomeMain from "../component/client/home/ClientHomeMain"
import ClientPortal from "../component/client/ClientPortal"
import { LoginPageFn } from "../component/auth/login/LoginPage"
import { AppointMentMainFn } from "../component/client/appointment/AppointMentMain"
import { RegisterPageFn } from "../component/auth/register/RegisterPage"
import { localStorageAction } from "../action/localStorage/localStorageAction"
import { useEffect } from "react"
import AdminPortal from "../layout/AdminLayout"
import { ZodiacMainFn } from "../component/admin/zodic/list/ZodiacMain"


const AdminRoutes = () => {

    let token = localStorageAction.getToken()

    return (
        <AuthAdminComponent>
            <Routes>
                <Route path="/" element={<AdminPortal />}>
                    <Route path='/' element={<Navigate to='/admin-dashboard' />} />
                    <Route path="/admin-dashboard" element={<h1>HEllo</h1>} />

                    <Route path="/zodiacs" element={<ZodiacMainFn />} />


                </Route>

            </Routes>
        </AuthAdminComponent>
    )
}

const AuthAdminComponent = ({ children }: { children: JSX.Element }) => {


    let navigate = useNavigate()

    let token = localStorageAction.getToken()

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return <>
        {children}
    </>
}


export default AdminRoutes