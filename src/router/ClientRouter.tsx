import { Navigate, Route, Routes } from "react-router-dom"
import ClientHomeMain from "../component/client/home/ClientHomeMain"
import ClientPortal from "../component/client/ClientPortal"
import { LoginPage } from "../component/auth/login/LoginPage"
import { RegisterPage, RegisterPageFn } from "../component/auth/register/RegisterPage"

const ClientRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ClientPortal />} >
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path="/home" element={<ClientHomeMain />} />

                </Route>


                <Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPageFn />} />
                </Route>
            </Routes>
        </div>
    )

}
export default ClientRoutes