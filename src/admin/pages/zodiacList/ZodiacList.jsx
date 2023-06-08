import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import classes from './zodiacList.module.css'
import { Col, Row } from 'react-bootstrap'
import img from '../../../../assets/bannerbg.jpg'
import ZodiacListShowPop from '../../../components/zodiacListShowPop/ZodiacListShowPop'

import { AiFillCloseSquare, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import moment from 'moment'
const ZodiacList = () => {

    const { link } = useSelector((state) => state.link)
    const { getallposts } = useSelector((state) => state.zodiac)

    const [open, SetOpen] = useState(false)
    const [singlepost, Setsinglepost] = useState({})

    const dispatch = useDispatch()
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
        }

    }
    const handelDel = async (id) => {
        dispatch(isLoading())
        const res = await axios.delete(`${link}/zodiac/delete/${id}`);
        window.location.reload()
        dispatch(stopLoading())
        getposts()
    }
    return (
        <div className={classes.fullbox}>
            <div className={classes.container}>

                <div className={classes.row}>
                    {
                        getallposts.map((val, idx) => {
                            return (

                                <div className={classes.warper} onClick={() => {
                                    SetOpen(true)
                                    Setsinglepost(val)
                                }} key={idx} >

                                    <div className={classes.image}>
                                        <img src={`${link}/images/${val.poto}`} />

                                        <div className={classes.contantbox}>
                                            <div className={classes.title}>
                                                <p>Title</p>
                                                <h3>{val.title} </h3>
                                            </div>
                                            <div className={classes.date}>

                                                <p>Date</p>
                                                <h3>  {moment(val.date).format("DD-MM-YYYY")} </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }
                </div>
                {
                    open ?
                        <ZodiacListShowPop  >
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
                                        <div  >
                                            <AiFillCloseSquare className={classes.popCloseButton} variant="danger" onClick={() => SetOpen(false)} />
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
                                            <img src={`${link}/images/${singlepost.poto}`} />
                                        </div>
                                    </Col>
                                    <Col lg='6'>
                                        <div className={classes.popdesc}>
                                            <textarea value={singlepost.desc} />
                                        </div>

                                    </Col>
                                </Row>
                                <div className={classes.logoutbtn}>


                                </div>

                            </div>
                        </ZodiacListShowPop>
                        : null
                }
            </div>
        </div>


    )
}

export default ZodiacList