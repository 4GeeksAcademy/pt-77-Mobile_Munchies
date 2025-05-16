import React, { useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const initialCenter = {
    lat: -3.745,
    lng: -38.523
};

export function MapVisual({FoodTruckName, address}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const [map, setMap] = React.useState(null);
    const [center, setCenter] = React.useState(initialCenter);
    const [markerPosition, setMarkerPosition] = React.useState(null);
    const [infoText, setInfoText] = React.useState('');

    const onLoad = React.useCallback(function callback(map) {
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const refocusMap = (newCenter) => {
        if (map) {
            setCenter(newCenter);
            map.panTo(newCenter);
        }
    };

    const refocusToAddress = (address) => {
        if (!window.google || !window.google.maps) return;

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            console.log("Geocode result:", { results, status });

            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;
                const latLng = {
                    lat: location.lat(),
                    lng: location.lng()
                };
                refocusMap(latLng);
                setMarkerPosition(latLng);
                setInfoText(address); // Show the address as custom text
            } else {
                console.error('Geocode failed:', status);
            }
        });
    };

    useEffect(() => {
        if(isLoaded) {
            handleRefocusToAddressClick();
        }
    },[isLoaded])
    
    const handleRefocusClick = () => {
        const newCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco
        refocusMap(newCenter);
        setMarkerPosition(newCenter);
        setInfoText('San Francisco');
    };

    const handleRefocusToAddressClick = () => {
        refocusToAddress(`Address:${address}`);
    };

    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {markerPosition && (
                    <Marker position={markerPosition}>
                        <InfoWindow position={markerPosition}>
                            <div>
                                <strong>{FoodTruckName}</strong>
                                <br />
                                {infoText}
                            </div>
                        </InfoWindow>
                    </Marker>
                )}
            </GoogleMap>

            <button onClick={handleRefocusClick}>
                Refocus to San Francisco
            </button>
            <button onClick={handleRefocusToAddressClick}>
                Refocus to Google HQ
            </button>
        </>
    ) : <></>;
}

export default React.memo(MapVisual);
