import About from "./About"
import Banner from "./Banner"
import { ZodiacList } from "./ZodiacList"

const ClientHomeMain = () => {
    return (
        <div>
            <Banner />
            <About />
            <ZodiacList/>
        </div>
    )
}

export default ClientHomeMain