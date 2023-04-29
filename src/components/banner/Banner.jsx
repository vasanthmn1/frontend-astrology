import React from 'react'
import classes from './banner.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import bannerimg from '../../../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <div className={classes.conatiner}>
                <Container>
                    <Row className={classes.row}>

                        <Col lg='6' className={classes.box1}>
                            <h1>
                                Ultimate Guide
                            </h1>
                            <h4>
                                To Astrology
                            </h4>

                            <button>
                                Appoinment Available Now
                                <span></span>
                            </button>
                        </Col>
                        <Col lg='6' className={classes.box2}>
                            <img className={classes.img} src={bannerimg} />
                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banner
