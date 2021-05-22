import axios from 'axios'


async function convertAddressToCoord (address){
    let response = await 
        axios.post(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLEMAP}`
        )

    console.log('responsee', response)
    return response.data.results ?  response.data.results[0].geometry.location : ""
}

async function convertCoordToAddress (coordinates) {

    console.log('coordinates', coordinates)
    let response = await 
        axios.post(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${process.env.GOOGLEMAP}`
        )

    console.log('responsee', response)
    
    return response.data.results ? response.data.results[0].formatted_address : ""
}


export {convertCoordToAddress, convertAddressToCoord}