import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import classes from './zodiacList.module.css'
import { Link } from 'react-router-dom'
import moment from 'moment'
const ZodiacList = () => {

    const { link } = useSelector((state) => state.link)
    const { getallposts } = useSelector((state) => state.zodiac)

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

    return (
        <div className={classes.fullbox} >
            <div className={classes.container}>

                <div className={classes.row}>
                    {
                        getallposts.map((val, idx) => {
                            return (

                                <div className={classes.warper} key={idx} >
                                    <Link to={`/siglezodiac/${val._id}`} >
                                        <div className={classes.image}>
                                            <img src={val.poto.url || val.poto} alt={val.title} />

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
                                    </Link>

                                </div>

                            )
                        })

                    }
                </div>

            </div>
        </div>


    )
}

export default ZodiacList