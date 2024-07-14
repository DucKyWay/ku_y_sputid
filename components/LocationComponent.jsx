// components/LocationComponent.js
'use client'
import { useState, useEffect } from 'react';

const LocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='bottom-0'>
          <p className='flex justify-center item-center'>Latitude: {location.latitude}</p>
          <p className='flex justify-center item-center'>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default LocationComponent;
