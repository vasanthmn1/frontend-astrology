import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import classes from './zodiacList.module.css'
import { Col, Row } from 'react-bootstrap'
import img from '../../../../assets/bannerbg.jpg'
import ZodiacListShowPop from '../../../components/zodiacListShowPop/ZodiacListShowPop'

import { AiFillCloseSquare } from 'react-icons/ai'
const ZodiacList = () => {

    const { link } = useSelector((state) => state.link)
    const { getallposts } = useSelector((state) => state.zodiac)
    console.log(getallposts);
    const [open, SetOpen] = useState(false)
    const [singlepost, Setsinglepost] = useState({})

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
                                    {/* <img src={img} /> */}
                                    <div className={classes.contantbox}>
                                        <div className={classes.title}>
                                            <p>Title</p>
                                            <h3>{val.title} </h3>
                                        </div>
                                        <div className={classes.date}>
                                            {/*  */}
                                            <p>Date</p>
                                            <h3>12/12/2022 </h3>
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
                                <div className={classes.poptitle}>
                                    <p>Title :</p>
                                    <h3>  {singlepost.title}</h3>
                                </div>
                                <div>
                                    <button onClick={() => SetOpen(false)}>
                                        Edit
                                    </button>
                                    <AiFillCloseSquare className={classes.popCloseButton} variant="danger" onClick={() => SetOpen(false)} />
                                </div>
                            </div>
                            <div className={classes.popheader}>
                                <div className={classes.poptitle}>
                                    <p>Date :</p>
                                    <h3>  {singlepost.date}</h3>
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

                                {/* <h5 className={classes.logoutDel}
                                // onClick={() => handelDelete()}
                                >Delete</h5>
                                <h5 className={classes.logoutChannel}
                                    onClick={() => SetOpen(false)}
                                >channel</h5> */}

                            </div>

                        </div>
                    </ZodiacListShowPop>
                    : null
            }
        </div>


    )
}

export default ZodiacList