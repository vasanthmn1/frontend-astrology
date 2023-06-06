import React, { useEffect, useRef } from 'react'
import classes from './zodiacSignSingle.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, getsingle, isLoading, stopLoading } from '../../redux/features/ZodiacSlice'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import { BiUpArrowAlt } from 'react-icons/bi'
const ZodiacSignSingle = () => {
    const dispatch = useDispatch()
    const { getallposts, getsinglepost } = useSelector((state) => state.zodiac)
    const { link } = useSelector((state) => state.link)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getposts()
        getpost()
        stickyHeader()
    }, [params.id])

    const getpost = async () => {
        dispatch(isLoading())
        const res = await axios.get(`${link}/zodiac/get/${params.id}`);
        dispatch(getsingle(res.data))

        dispatch(stopLoading())

    }
    const getposts = async () => {
        dispatch(isLoading())
        const res = await axios.get(`${link}/zodiac/get`);
        dispatch(getallpost(res.data))
        dispatch(stopLoading())

    }
    const changepost = (id) => {
        navigate(`/zodiac/${id}`)
        handelup()
    }
    const uparraw = useRef(null)
    const stickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
                uparraw.current.classList.add(classes.uparrow)


            } else {
                uparraw.current.classList.remove(classes.uparrow)


            }
        })
    }
    const handelup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className={classes.container}>
            <Container>
                ZodiacSignSingle
                <Row>
                    <Col lg='4' className={classes.box1}>
                        <Row>
                            <Col lg='12' >
                                {/* to={`/zodiac/${val._id}`} */}
                                {
                                    getallposts && getallposts.map((val, idx) => {
                                        return (
                                            <div onClick={() => changepost(val._id)} key={idx}>
                                                <div className={val._id == params.id ? classes.active : classes.box}  >
                                                    <img src={`${link}/images/${val.poto}`} />
                                                    <div className={classes.content}>
                                                        <h6>{val.title}</h6>
                                                        <p>{moment(val.date).format("DD-MM-YYYY")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }



                            </Col>

                        </Row>
                    </Col>
                    <Col lg='8' >
                        <Row className={classes.box2}>
                            <Col lg='4'>
                                <div className={classes.box2image}>
                                    <img src={`${link}/images/${getsinglepost.poto}`} />
                                </div>

                            </Col>
                            <Col lg='8'>
                                <div className={classes.box2content}>
                                    <h1>{getsinglepost.title}</h1>
                                    <h3> {moment(getsinglepost.date).format("DD-MM-YYYY")}</h3>
                                </div>
                            </Col>
                            <Col lg='12'>
                                <div className={classes.descbox}>
                                    <p>
                                        {getsinglepost.desc}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div ref={uparraw} onClick={() => handelup()}>
                    <BiUpArrowAlt className={classes.up} />
                </div>
            </Container>
        </div>
    )
}

export default ZodiacSignSingle