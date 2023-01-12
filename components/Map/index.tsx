import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const center = {
  lat: 37.63436175338306,
  lng: 127.07706751281931,
};

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    map.zoom = 5;
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => setMap(null), []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: '90%',
        // height: '70%',
        aspectRatio: 1,
      }}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* {child} */}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapComponent;
