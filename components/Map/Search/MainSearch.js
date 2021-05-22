import React, {useState} from 'react'

import Styles from './MainSearch.module.css'
import {
    Paper,
    Typography
} from '@material-ui/core'

import SearchArea from './SearchArea'

const MainSearch = () => {

    return (
        <Paper className={Styles.searchContainer}>
            <Typography> Search Result </Typography>
            <SearchArea/>
        </Paper>
    )

}

export default MainSearch;