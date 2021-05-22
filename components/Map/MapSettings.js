import {
    Marker,
    GoogleMap,
    // InfoWindow,
    withScriptjs,
    withGoogleMap,
    // DirectionsRenderer,
  } from 'react-google-maps'


  export const MAP_SETTINGS = {
    DEFAULT_MAP_OPTIONS: {
      scrollwheel: false,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    },
    DEFAULT_CENTER: { lat: 57, lng: 20 },
    DEFAULT_ZOOM: 4,
    MARKER_SIZE: 35,
    PIXEL_OFFSET: {
      MARKER: {
        X: 0,
        Y: -35,
      },
    },
    DIRECTIONS_OPTIONS: { suppressMarkers: true, preserveViewport: true },
  }