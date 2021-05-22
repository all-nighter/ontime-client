
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import MapDirections from '../../components/Map/MapDirections'
import CircularProgress from '@material-ui/core/CircularProgress';

import {Grid, Paper} from '@material-ui/core'

const Route = () => {

    const router = useRouter()

    const [loading, setLoading] = useState(true)
    const [mapState, setMapState] = useState({})

    useEffect( () => {
        if (!router.isReady) return 
        const start = {
            lat: parseFloat(router.query.startLat),
            lng: parseFloat(router.query.startLng)
        }
        const dest = {
            lat: parseFloat(router.query.destLat),
            lng: parseFloat(router.query.destLng)
        }

        const userName = router.query.userName
        const phone = router.query.phone
        const eta = router.query.eta
        setMapState({...mapState, start, dest, userName, phone, eta})
        setLoading(false)
    
    },[router.isReady])

    
    return (
        <div>
            {loading ? 
                <CircularProgress />
                 :
                <div> 
                    <MapDirections start={mapState.start} dest={mapState.dest} />
                    <Paper style={{position: 'absolute', bottom: '60px', left: '30px', width: '360px'}}>
                        <Grid container>
                            <Grid item xs={2} styles={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
                                <img style={{borderRadius: '1000px', width: '100%', height: '80%', margin:'auto'}} src={`/avatars/img_profile_${Math.floor(Math.random() * 11) + 1}.png`} />
                            </Grid>
                            <Grid item xs={6}>
                                <p style={{fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: 'normal',
                                            fontSize: '16px',
                                            lineHeight: '19px',
                                            color: '#010101'
                                        }}> 
                                {mapState.userName} </p>
                                <p style={{
                                    fontFamily: 'Roboto',
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                    fontSize: '12px',
                                    lineHeight: '14px',
                                    color: '#999999',
                
                                }}> {mapState.phone} </p>

                            </Grid>
                            <Grid item xs={4}>
                                <p> $30.00</p>
                                <p> ETA: {mapState.eta}</p>
                            </Grid>

                        </Grid>

                    </Paper>
                </div>
            }

          

        </div>
    )

}

export default Route;