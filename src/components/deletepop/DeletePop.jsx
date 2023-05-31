import React from 'react'
import classes from './deletePop.module.css'
const DeletePop = ({ children }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    )
}

export default DeletePop