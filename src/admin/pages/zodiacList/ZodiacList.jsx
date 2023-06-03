import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import classes from './zodiacList.module.css'
import Accordion from '../../../utils/Accordion/Accordion'
import { Col, Container, Row } from 'react-bootstrap'



const ZodiacList = () => {

    const { link } = useSelector((state) => state.link)
    const { getallposts } = useSelector((state) => state.zodiac)
    console.log(getallposts);
    const dispatch = useDispatch()
    useEffect(() => {
        getposts()
    }, [])
    const getposts = async () => {
        dispatch(isLoading())
        const res = await axios.get(`${link}/zodiac/get`);
        dispatch(getallpost(res.data))
        dispatch(stopLoading())

    }
    return (
        <div className={classes.container}>
            <div >
                <Row>
                    {
                        getallposts.map((val, idx) => {
                            return (

                                <Col lg='5' className={classes.warper}>
                                    <div className={classes.image}>
                                        <img src={`${link}/images/${val.poto}`} />
                                        <h1>{val.title}  </h1>
                                    </div>


                                    <div>
                                        {/* <h1>{val.desc}</h1> */}
                                        <div className={classes.image}>
                                            {/*  */}
                                        </div>
                                    </div>
                                </Col>



                            )
                        })
                    }
                </Row>

            </div>

        </div>
    )
}

export default ZodiacList