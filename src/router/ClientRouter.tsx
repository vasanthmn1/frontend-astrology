import { Navigate, Route, Routes } from "react-router-dom"
import ClientHomeMain from "../component/client/home/ClientHomeMain"
import ClientPortal from "../component/client/ClientPortal"

const ClientRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ClientPortal />} >
                    <Route path='/' element={<Navigate to='/home' />} />
                    <Route path="/home" element={<ClientHomeMain />} />



                </Route>
            </Routes>
        </div>
    )

}
export default ClientRoutes