import React, {useState} from 'react'

import Styles from './search.module.css'
import {
    TextField, 
    Grid,
    Button
} from '@material-ui/core'

import MapContext from '../MapContext'
import {convertCoordToAddress, convertAddressToCoord} from '../../../lib/Map/map.lib';


const MainSearch = (props) => {
    const {map, ...rest} = props

    const [search, setSearch] = useState({
        startAddress:map.startAddress,
        destAddress:map.destAddress,
        startCoordinates:map.startCoordinates,
        destCoordinates:map.destCoordinates
    })

    MapContext.renderSearch = () => {
        setSearch({...search, ...MapContext.getMapContext()})
    }

    const handleSearch = (searchField, e) => {
        setSearch({...search, [searchField]: e.target.value})
    }

    const submitSearch = async (searchField,pinField, e) => {
        const coordinates = await convertAddressToCoord(search[searchField])
        MapContext.setContext(pinField, coordinates)
        MapContext.setContext(searchField, search[searchField])
        MapContext.renderSearch()
        MapContext.renderPin()
    }

    return (
        <Grid container className={Styles.textContainer}> 
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    size="small" 
                    variant="outlined" 
                    className={Styles.textArea}
                    value={search.startAddress}
                    onChange={(e) => handleSearch('startAddress', e)}
                    onKeyPress={async (e) => {
                        if(e.key === 'Enter' && search.startAddress.length > 0){
                            e.preventDefault(); // Ensure it is only this code that runs
                            await submitSearch('startAddress', 'startCoordinates', e)
                        }
                    }}
                />
            </Grid> 
            <Grid item xs={12}>
                <TextField 
                    id="outlined-basic" 
                    size="small" 
                    variant="outlined" 
                    className={Styles.textArea}
                    value={search.destAddress}
                    onChange={(e) => handleSearch('destAddress', e)}
                    onKeyPress={async (e) => {
                        if(e.key === 'Enter' && search.destAddress.length > 0){
                        await submitSearch('destAddress', 'destCoordinates', e)
                    }}
                }

                />
            </Grid> 
        </Grid>
    )

}

export default MainSearch;