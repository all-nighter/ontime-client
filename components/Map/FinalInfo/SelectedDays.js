
import React, {useState} from 'react';
import {
    Grid, GridList
} from '@material-ui/core';

import Styles from '../Search/search.module.css'

import MapContext from '../MapContext'

const DaySelect = (props) => {

    const {frequency, ...rest} = props

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


    return (
        <div className={Styles.daySelectContainer2}> 
            <div className={Styles.dayContainer}>
                {days.map( (dayObj, i) => (
                    <div key={i} className={ `${Styles.day} ${frequency.includes(i)? Styles.selected : null}`}>
                        {dayObj.day}
                    </div>
                ))}

            </div>
        </div>

    )
}


export default DaySelect;