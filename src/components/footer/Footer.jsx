import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../../assets/logo.png'
import classes from './footer.module.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className={classes.conatiner}>
            <Container>
                <Row className={classes.row}>
                    <Col lg='4'>
                        <div className={classes.image}>
                            <img src={logo} />
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className={classes.contact}>
                            <h3>Contact Us</h3>
                            <ul className={classes.ul}>
                                <li>
                                    <a href="#">
                                        <FaFacebookF className={classes.icon} />    </a>
                                </li>
                                <li>
                                    <a href="#"><AiOutlineTwitter className={classes.icon} /> </a>
                                </li>
                                <li>
                                    <a href="#"><AiOutlineInstagram className={classes.icon} /> </a></li>
                                {/* <li>
                                    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li> */}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <div className={classes.copyright}>
                    <p>© Copyright 2023 All Rights Reserved</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer