import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import ClientHomeMain from "../component/client/home/ClientHomeMain"
import ClientPortal from "../component/client/ClientPortal"
import { LoginPageFn } from "../component/auth/login/LoginPage"
import { AppointMentMainFn } from "../component/client/appointment/AppointMentMain"
import { RegisterPageFn } from "../component/auth/register/RegisterPage"
import { localStorageAction } from "../action/localStorage/localStorageAction"
import React, { useEffect } from "react"
import Header from "../component/client/Header"



//# Correctly this Roues Not Working... fix Latter
const UserRoutes = () => {

    return (
        <AuthClientComponent>
            <>
                <Header />
                <Routes>

                    <Route
                        path="/appointment"
                        element={<AppointMentMainFn />}
                    />
                </Routes >
            </>

        </AuthClientComponent>

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


export default UserRoutes