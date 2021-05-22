import React, {useState} from 'react';

import {Grid} from '@material-ui/core'
import Styles from './final.module.css';
import {API_PREFIX} from '../../../env.js'

import MapContext from '../MapContext'

const Price = () => {

    const [submission, setSubmission] = useState({
        ...MapContext.getMapContext()
    })

    MapContext.renderSubmit = () => {
        setSubmission({...submission, ...MapContext.getMapContext()})
    }

    const handleSubmit = async  () => {
        let response = await fetch(`${API_PREFIX}/user/subscription`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({...submission, email: localStorage.getItem('email')})
         })

         response = await response.json()

         console.log(response)
    }
         

    return (
        <div className={Styles.priceContainer}> 
            <Grid container onClick={async () => await handleSubmit()}>
                <Grid item xs={2} className={Styles.imgContainer}>
                    <img src='./directions_car.png'/>
                </Grid>
                <Grid item xs={8} className={Styles.serviceContainer}>
                    <p className={Styles.serviceText1}> Service A</p>
                    <p className={Styles.serviceText2}> 2U </p>
                </Grid>    
                <Grid item xs={2} className={Styles.priceContainer}>
                    <p className={Styles.priceText}> Price </p>
                    <p className={Styles.priceText}> $100.00 </p>
                </Grid>
            </Grid>
            <hr className={Styles.divider} />
            <Grid container onClick={async () => await handleSubmit()}>
                <Grid item xs={2} className={Styles.imgContainer}>
                    <img src='./local_car_wash.png'/>
                </Grid>
                <Grid item xs={8} className={Styles.serviceContainer}>
                    <p className={Styles.serviceText1}> Service B</p>
                    <p className={Styles.serviceText2}> 2U </p>
                </Grid>    
                <Grid item xs={2} className={Styles.priceContainer}>
                    <p className={Styles.priceText}> Price </p>
                    <p className={Styles.priceText}> $130.00 </p>
                </Grid>
            </Grid>
        </div>


    )

}


export default Price;