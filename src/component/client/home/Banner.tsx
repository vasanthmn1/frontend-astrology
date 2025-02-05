
import { Col, Container, Row } from 'react-bootstrap'
// import bannerimg from '/public/img/banner.png'
import { Link } from 'react-router-dom'
import bannerImg from '../../../../public/img/client/home/banner.png';
const Banner = () => {


    return (
        <div className='client-home-banner'>
            <div className={"wrapper"}>
                <Container>
                    <Row className={"row"}>

                        <Col lg='6' className={"box-1"}>
                            <h1>
                                Ultimate Guide
                            </h1>
                            <h4>
                                To Astrology
                            </h4>

                            {/* {
                                user ?
                                    <Link to={'/appointment'}>
                                        <button >
                                            Appoinment Available Now
                                            <span></span>
                                        </button>
                                    </Link>
                                    : */}
                            <Link to={'/login'}>
                                <button >
                                    Appoinment Available Now
                                    <span></span>
                                </button>
                            </Link>
                            {/* } */}
                        </Col>
                        <Col lg='6' className={"box-2"}>
                            <img className={"img"} src={bannerImg} />
                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner
