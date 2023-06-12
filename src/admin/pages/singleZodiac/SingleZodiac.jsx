import React, { useEffect, useState } from 'react'
import classes from './singleZodiac.module.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import { AiFillCloseSquare, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import moment from 'moment'
import { Col, Row } from 'react-bootstrap'
const SingleZodiac = () => {
    const params = useParams()
    const { link } = useSelector((state) => state.link)
    const { getallposts } = useSelector((state) => state.zodiac)

    const navigate = useNavigate()
    const [singlepost, Setsinglepost] = useState({})



    const dispatch = useDispatch()
    useEffect(() => {
        getposts()
    }, [])
    const getposts = async () => {
        try {
            dispatch(isLoading())
            const res = await axios.get(`${link}/zodiac/get/${params.id}`);
            Setsinglepost(res.data)
            dispatch(stopLoading())
        } catch (error) {
            console.log(error);
        }

    }


    const handelDel = async (id) => {
        dispatch(isLoading())
        const res = await axios.delete(`${link}/zodiac/delete/${id}`);
        navigate(`/zodiaclist`)
        dispatch(stopLoading())
        getposts()
    }

    return (
        <div className={classes.mainbox}>
            <div className={classes.popheader}>
                <div className={classes.popSetting} >
                    <div className={classes.popSetting1}>
                        <Link to={`/zodiaedit/${singlepost._id}`}>    <div className={classes.popEdit}>
                            <span >
                                Edit
                            </span>
                            <AiFillEdit className={classes.popEditButton} onClick={() => SetOpen(false)} />
                        </div></Link>
                        <div className={classes.popDelete} onClick={() => handelDel(singlepost._id)}>
                            <span >
                                Delete
                            </span>
                            <AiFillDelete className={classes.popDeleteButton} onClick={() => SetOpen(false)} />
                        </div>

                    </div>

                </div>
            </div>
            <div className={classes.popheader1}>
                <div className={classes.poptitle}>
                    <p>Title :</p>
                    <h3>  {singlepost.title}</h3>
                </div>
                <div className={classes.poptitle}>
                    <p>Date :</p>
                    <h3>  {moment(singlepost.date).format("DD-MM-YYYY")}</h3>
                </div>

            </div>
            <Row>
                <Col lg='6'>
                    <div className={classes.popimage}>
                        <img src={singlepost.poto?.url || singlepost.poto} />
                    </div>
                </Col>
                <Col lg='6'>
                    <div className={classes.popdesc}>
                        <textarea defaultValue={singlepost.desc} />
                    </div>

                </Col>
            </Row>
            <div className={classes.logoutbtn}>


            </div>

        </div>
    )
}

export default SingleZodiac
