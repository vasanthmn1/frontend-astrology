import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getallpost, isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import classes from './zodiacPosts.module.css'
import Accordion from '../../../utils/Accordion/Accordion'



const ZodiacPosts = () => {

    const { link } = useSelector((state) => state.link)
    const { getallposts } = useSelector((state) => state.zodiac)
    console.log(getallposts);
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
    const [show, SetShow] = useState(false)
    return (
        <div>
            {
                getallposts.map((val, idx) => {
                    return (
                        <>
                            <h1 onClick={() => SetShow(!show)}>{val.title}  </h1>
                            {/* <h1>{val.date}</h1> */}
                            {
                                show &&
                                <div>
                                    <h1>{val.desc}</h1>
                                    <div className={classes.image}>
                                        {/* <img src={`${link}/images/${val.poto}`} /> */}
                                    </div>
                                </div>
                            }


                        </>

                    )
                })
            }
        </div>
    )
}

export default ZodiacPosts