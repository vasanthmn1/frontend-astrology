import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Banner from '../../components/banner/Banner'
import Spiner from '../../components/spiner/Spiner'
import HandDetail from '../../components/handeDetail/HandDetail'
import classes from './home.module.css'
import ZodiacSign from '../../components/zodiacSign/ZodiacSign'

const Home = () => {


    return (
        <div className={classes.conatiner}>
            <Banner />
            {/* <Spiner /> */}
            <HandDetail />
            <ZodiacSign />
        </div>

    )
}

export default Home