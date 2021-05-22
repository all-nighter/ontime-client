
import React, {useState} from 'react'
import {
    Grid, GridList
} from '@material-ui/core';

import Styles from './search.module.css'

import MapContext from '../MapContext'

const DaySelect = () => {

    const [days, setDays] = useState([
        {
            day: 'MON',
            selected: false
        },
        {
            day: 'TUE',
            selected: false
        }, 
        {
            day: 'WED',
            selected: false
        }, 
        {
            day: 'THU',
            selected: false
        }, 
        {
            day: 'FRI',
            selected: false
        }, 
        {
            day: 'SAT',
            selected: false
        }, 
        {
            day: 'SUN',
            selected: false
        } 
    ])


    const handleClick = (i) => {
        const newDays = days
        newDays[i].selected = !newDays[i].selected
        setDays([...newDays])
        let currentNumDay = MapContext.getMapContext().numDays;
        if (newDays[i].selected) {
            currentNumDay += 1
        } else {
            currentNumDay -= 1
        }
        MapContext.setContext('numDays', currentNumDay)
        MapContext.renderNumDays()
        
    }

    return (
        <div className={Styles.dayContainer}>
            {days.map( (dayObj, i) => (
                <div key={i} className={ `${Styles.day} ${days[i].selected ? Styles.selected : null}`} onClick={(e) => handleClick(i)}>
                    {dayObj.day}
                </div>
            ))}

        </div>

    )
}


export default DaySelect;