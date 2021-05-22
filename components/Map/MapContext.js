
import {convertCoordToAddress, convertAddressToCoord} from '../../lib/Map/map.lib'

const MapContext = {
    startAddress: '',
    destAddress: '',
    startCoordinates: {},
    destCoordinates: {},
    mode: 0
}

const initialize = async (center) => {

    console.log('centterrrr', center)
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

const renderMode = () => {}

const renderPin = () => {}



export default {initialize, setContext, getMapContext, renderSearch, renderMode, renderPin}