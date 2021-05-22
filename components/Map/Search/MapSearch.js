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

import MapContext from '../MapContext';

const MainSearch = (props) => {

    const {map, ...rest} = props

    const handleSubmit = async () => {
        MapContext.setContext('mapType', 1)
        MapContext.renderMapType()
        MapContext.renderAgain()
        MapContext.renderEstimatedTime()
        MapContext.renderFrequency()
        MapContext.renderSubmit()
    }

    return (
        <Paper className={Styles.searchContainer}>
            <div className={Styles.searchTitleContainer}>
                <h1 className={Styles.searchTitle}> SEARCH </h1>
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