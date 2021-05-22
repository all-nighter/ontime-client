import React, {useState} from 'react'

import Styles from './search.module.css'
import {
    Paper,
    Typography
} from '@material-ui/core'

import SearchArea from './SearchArea'

const MainSearch = (props) => {

    const {map, ...rest} = props

    return (
        <Paper className={Styles.searchContainer}>
            <div className={Styles.searchTitleContainer}>
                <Typography className={Styles.searchTitle}> Search Result </Typography>
            </div> 
            <SearchArea map={map}/>
        </Paper>
    )

}

export default MainSearch;