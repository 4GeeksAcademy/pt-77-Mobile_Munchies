import React, { memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const initialCenter = {
    lat: -3.745,
    lng: -38.523
};

export function MapVisual() {
    const google = window.google = window.google ? window.google : {}
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.GOOGLE_API_KEY
    })

    const [map, setMap] = React.useState(null)
    const [center, setCenter] = React.useState(initialCenter);

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    // Function to refocus map center
    const refocusMap = (newCenter) => {
        if (map) {
            setCenter(newCenter); // Update the center state
            map.panTo(newCenter); // Move the map to the new center
        }
    };

    const handleRefocusClick = () => {
        const newCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco
        refocusMap(newCenter);
    };

    return isLoaded ? (
        <>

            {/* <LoadScript googleMapsApiKey={import.meta.env.VITE_BACKEND_URL} > */}
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
            {/* </LoadScript> */}
            { /* Child components, such as markers, info windows, etc. */}
            <></>
            <button onClick={handleRefocusClick}>
                Refocus to San Francisco
            </button>
        </>
    ) : <></>
}



export default React.memo(MapVisual)