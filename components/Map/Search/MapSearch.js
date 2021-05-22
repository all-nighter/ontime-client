import React, {useState} from 'react'

import Styles from './search.module.css'
import {
    Paper,
    Typography,
    Button,
    Grid
} from '@material-ui/core';

import SearchArea from './SearchArea';
import TimeSelect from './TimeSelect';

import API_PREFIX from '../../../env.js'
import { MapContext } from '@react-google-maps/api';

const MainSearch = (props) => {


    const {map, ...rest} = props

    const handleSubmit = async () => {
        let response = await fetch(`${API_PREFIX}/user/subscription`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              email: localStorage.getItem('email'),
              ...MapContext.getMapContext()
            }),
          })

        response = await response.json()
    }

    return (
        <Paper className={Styles.searchContainer}>
            <div className={Styles.searchTitleContainer}>
                <Typography className={Styles.searchTitle}> SEARCH </Typography>
            </div> 
            <SearchArea map={map}/>
            <TimeSelect />
            <Grid container className={Styles.buttonsContainer}> 
                <Grid item xs={6}>
                    <Button > 
                        <Grid container spacing={2}> 
                            <Grid item xs={2}>
                                <img src='./person.png'/>
                            </Grid>
                            <Grid item xs={10}>
                                Passenger 1
                            </Grid>
                        </Grid>
                     </Button>
                </Grid>
                <Grid item xs={6} className={Styles.buttonContainer}>
                    <Button className={Styles.button} onClick={async () => await handleSubmit()}> Book </Button>
                </Grid>
            </Grid>
        </Paper>
    )

}

export default MainSearch;