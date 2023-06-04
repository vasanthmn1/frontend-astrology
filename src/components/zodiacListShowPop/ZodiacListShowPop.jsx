import React from 'react'
import classes from './zodiacListShowPop.module.css'
const ZodiacListShowPop = ({ children }) => {

    return (
        <div className={classes.container} SetOpen={true}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

export default ZodiacListShowPop