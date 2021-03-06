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

    const handleSwap = () => {
       const startAddress = MapContext.getMapContext().startAddress
       const destAddress = MapContext.getMapContext().destAddress

       const startCoordinates = MapContext.getMapContext().startCoordinates
       const destCoordinates = MapContext.getMapContext().destCoordinates

       MapContext.setContext('startAddress', destAddress)
       MapContext.setContext('destAddress', startAddress)
       MapContext.setContext('startCoordinates', destCoordinates)
       MapContext.setContext('destCoordinates', startCoordinates)
       MapContext.renderSearch()
       MapContext.renderPin()

    }

    return (
        <Grid container className={Styles.textContainer}> 
            <Grid item xs={2} className={Styles.images}>
                <Grid item xs={12} className={Styles.imgContainer}> 
                    <img src='/departure.png' className={Styles.image}/>
                </Grid>
                <Grid item xs={12} className={Styles.imgContainer}>
                    <img src='/Line.png' className={Styles.superThin} />
                </Grid> 
                <Grid  item xs={12} className={Styles.imgContainer}> 
                    <img src='/Vector.png' className={Styles.image}/>
                </Grid>
            </Grid>
            <Grid container xs={9} spacing={2}> 
                <Grid item xs={12}>
                    <TextField 
                        id="outlined-basic" 
                        size="small" 
                        variant="outlined" 
                        className={Styles.textArea}
                        value={search.startAddress}
                        onChange={(e) => handleSearch('startAddress', e)}
                        onFocus={(e) => {
                            setSearch({...search, startAddress: ''})
                        }}
                        onBlur={async (e) => {
                            if (e.target.value !== '') {
                                e.preventDefault(); // Ensure it is only this code that runs
                                await submitSearch('startAddress', 'startCoordinates', e)
                            }
                        }}
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
                        onFocus={(e) => {
                            setSearch({...search, destAddress: ''})
                        }}
                        onBlur={async (e) => {
                            if (e.target.value !== '') {
                                e.preventDefault(); // Ensure it is only this code that runs
                                await submitSearch('destAddress', 'destCoordinates', e)
                            }
                            
                        }}
                        onKeyPress={async (e) => {
                            if(e.key === 'Enter' && search.destAddress.length > 0){
                            await submitSearch('destAddress', 'destCoordinates', e)
                        }}
                    }

                    />
                </Grid> 

            </Grid>
            <Grid item xs={1}>
                <Grid item xs={12} className={Styles.imgContainer}>
                    <Button onClick={(e) => handleSwap()}> 
                        <img src='./swap_vert.png' className={Styles.image}/>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default MainSearch;