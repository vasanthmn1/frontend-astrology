import { useEffect } from 'react'
import classes from './zodiacSign.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, isLoading, stopLoading } from '../../redux/features/ZodiacSlice'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CardLoader } from '../loader/card_spiner/CardLoader'


const ZodiacSign = () => {
    const dispatch = useDispatch()
    const { getallposts, postLoading } = useSelector((state) => state.zodiac)
    const { link } = useSelector((state) => state.link)

    useEffect(() => {
        getposts()
    }, [])
    const getposts = async () => {
        try {
            dispatch(isLoading())
            const res = await axios.get(`${link}/zodiac/get`);
            dispatch(getallpost(res.data))
            dispatch(stopLoading())
        } catch (error) {
            console.log(error);
            dispatch(stopLoading())
            toast.error(error.response.data)
        }


    }
    return (
        <div className={classes.container}>
            <ToastContainer />
            <div className={classes.heading}>
                <h1>Choose Your Zodiac Sign</h1>
                <p>What’s Your Sign? Read Your Daily  <br />Horoscope Today</p>
            </div>
            <div>
                <Container>
                    <Row>
                        {


                            postLoading ? <CardLoader /> :



                                getallposts.map((val, idx) => {
                                    return (
                                        <Col lg='3' className={classes.mainbox} key={idx}>
                                            <Link to={`/zodiac/${val._id}`}>
                                                <div className={classes.box} >
                                                    <div className={classes.image}>
                                                        <img src={val.poto.url} alt={val.title} />
                                                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeBqe25wChX63K8lO-hOAYf7eHkD-APMkx9MU4pGcmeA&s' /> */}
                                                    </div>
                                                    <div className={classes.content}>
                                                        <h6>{val.title}</h6>
                                                        <p>{moment(val.date).format("DD-MM-YYYY")}</p>

                                                    </div>
                                                </div>
                                            </Link>

                                        </Col>
                                    )
                                })
                        }


                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ZodiacSign