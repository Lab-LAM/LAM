import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Maps.css';

function Maps() {
  const GOOGLE_MAPS_API_KEY =
    process.env.GOOGLE_MAPS_API_KEY ||
    'AIzaSyBDwFo2OvQLo8Az5EEci5sJEgB7ZZ0Cd6k';

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const position = {
    lat: -10.176518,
    lng: -48.361089,
  };

  return (
    <div className='maps-container'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '465px',
            maxWidth: '826px',
            margin: '0 auto',
          }}
          center={position}
          zoom={15}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Maps;
