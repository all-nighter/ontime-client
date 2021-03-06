
import {convertCoordToAddress, convertAddressToCoord} from '../../lib/Map/map.lib'

const MapContext = {
    startAddress: '',
    destAddress: '',
    startCoordinates: {},
    destCoordinates: {},
    time: '00:00',
    numDays: 0,
    frequencyOfWeek: [],
    mapType: 0,
    estimatedTimeSeconds: 0
}

const initialize = async (center) => {
    MapContext.startAddress = await convertCoordToAddress(center);
    MapContext.destAddress = ''
    MapContext.startCoordinates = center;
    MapContext.destCoordinates = {}
    MapContext.mode = 0
    return MapContext
}


const setContext = (field, val ) => {
    MapContext[field] = val
    return
}

const getMapContext = () => {
    return MapContext
}

const renderSearch = () => {}


const renderPin = () => {}

const renderNumDays = () => {}

const renderMapType = () => {}

const renderAgain = () => {}

const renderEstimatedTime = () => {}

const renderFrequency = () => {}

const renderSubmit = () => {}


export default {
    initialize, 
    setContext, 
    getMapContext, 
    renderSearch, 
    renderPin, 
    renderNumDays, 
    renderMapType, 
    renderAgain,
    renderEstimatedTime,
    renderFrequency,
    renderSubmit
}