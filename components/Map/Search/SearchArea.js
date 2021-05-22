import React, {useState} from 'react'

import styles from './MainSearch'
import {
    TextField, 
    Grid
} from '@material-ui/core'

const MainSearch = () => {

    return (
        <Grid container> 
            <Grid xs={12}>
                <TextField id="outlined-basic" variant="outlined" />
            </Grid> 
            <Grid xs={12}>
                <TextField id="outlined-basic" variant="outlined" />
            </Grid> 
        </Grid>
    )

}

export default MainSearch;