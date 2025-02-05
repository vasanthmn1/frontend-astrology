
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../../../public/img/client/home/hand.png';

import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className={"client-home-about"}>
            <Container>
                <Row>
                    <Col lg="6" className='d-flex justify-content-center align-items-center'>
                        <div className={"img"}>
                            <img src={img} />
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className={"detail"}>
                            <h2>
                                Tarot is a powerful tool for transformation
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi tellus, pulvinar vel tempus eget, finibus vitae ante. Fusce sit amet velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum sodales magna a volutpat tempus. Mauris vestibulum id urna viverra ultrices. Nullam rhoncus elit eget libero varius dapibus.
                            </p>
                            <button>
                                <Link to={'/appointment'}>

                                    Get started  </Link></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About