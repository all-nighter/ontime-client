import React, {useState} from 'react'

import EstimatedTime from './EstimatedTime';
import SelectedDays from './SelectedDays';
import Price from './Price';
import Styles from './final.module.css'
import MapContext from '../MapContext'



const FinalCheck = () => {

    const [frequency, setFrequency] = useState(MapContext.getMapContext().frequencyOfWeek)


    MapContext.renderFrequency = () => {
        setFrequency(MapContext.getMapContext().frequencyOfWeek)
    }

    return (
        <div className={Styles.finalInfoContainer}>
            <EstimatedTime/>
            <SelectedDays frequency={frequency}/>
            <Price/>
        </div> 
    )

}


export default FinalCheck;