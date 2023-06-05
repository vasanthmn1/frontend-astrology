import React from 'react'
import classes from './zodiacSign.module.css'
import { Row } from 'react-bootstrap'
const ZodiacSign = () => {
    return (
        <div className={classes.container}>
            <div>
                <h2>Choose Your Zodiac Sign</h2>
                <p>What’s Your Sign? Read Your Daily  <br />Horoscope Today</p>
            </div>
            <div>
                <Row>

                </Row>
            </div>
        </div>
    )
}

export default ZodiacSign