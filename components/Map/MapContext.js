

const MapContext = {
    startSearch: '',
    destinationSearch: '',
    startCoordinates: {},
    destCoordinates: {},

    mode: 'chooseStart'
}

const setContext = (field, val ) => {
    MapContext[field] = val
    return
}

const getMapContext = () => {
    return MapContext
}

const render = () => {}


export default {setContext, getMapContext, render}