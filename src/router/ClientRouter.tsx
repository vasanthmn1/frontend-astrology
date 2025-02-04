import { Route, Routes } from "react-router-dom"
import ClientHomeMain from "../component/client/home/ClientHomeMain"
import ClientPortal from "../component/client/ClientPortal"

const ClientRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<ClientPortal />} />
            </Routes>
        </div>
    )

}
export default ClientRoutes