// import React from 'react'

import MoonLoader from "react-spinners/MoonLoader";
import classes from './spiner.module.css'


const Spiner = () => {


    return (
        <div className={classes.sweet_loading}>

            <MoonLoader
                color="#B71375"
                cssOverride={{}}
                size={50}
            />
        </div>
    )
}

export default Spiner