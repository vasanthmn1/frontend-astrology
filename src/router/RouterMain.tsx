import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import ClientHomeMain from "../component/client/home/ClientHomeMain"
import ClientPortal from "../component/client/ClientPortal"
import { LoginPageFn } from "../component/auth/login/LoginPage"
import { AppointMentMainFn } from "../component/client/appointment/AppointMentMain"
import { RegisterPageFn } from "../component/auth/register/RegisterPage"
import { localStorageAction } from "../action/localStorage/localStorageAction"
import { useEffect } from "react"
import AdminPortal from "../layout/AdminLayout"
import AdminRoutes from "./AdminRouter"


const RouterMain = () => {

    let token = localStorageAction.getToken()

    return (
        <div>
            <AdminRoutes />
            <Routes>

                {/* <Route path="/" element={<ClientPortal />} >
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path="/home" element={<ClientHomeMain />} />
                    <Route
                        path="/appointment"
                        element={<AuthClientComponent><AppointMentMainFn /></AuthClientComponent>}
                    />
                </Route> */}
                {
                    !token ? <Route>
                        <Route path="/login" element={<LoginPageFn />} />
                        <Route path="/register" element={<RegisterPageFn />} />
                    </Route> : <Route>
                        <Route path="/login" element={<Navigate to='/home' />} />
                        <Route path="/register" element={<Navigate to='/home' />} />
                    </Route>
                }

            </Routes>
        </div>
    )
}

const AuthClientComponent = ({ children }: { children: JSX.Element }) => {


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


export default RouterMain