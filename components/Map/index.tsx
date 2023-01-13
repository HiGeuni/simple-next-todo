import { LegendToggleOutlined } from '@mui/icons-material';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState, useEffect } from 'react';

interface latlng {
  lat: number;
  lng: number;
}

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });
  const [map, setMap] = useState(null);
  const [loc, setLoc] = useState<latlng>({ lat: 1, lng: 1 });

  const onLoad = useCallback((map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        setLoc({
          lat: lat,
          lng: lon,
        });
      });
    } else {
      console.log('Cannot Using Geolocation API');
      setLoc({
        lat: 37.63436175338306,
        lng: 127.07706751281931,
      });
    }
    const bounds = new window.google.maps.LatLngBounds(loc);
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
      center={loc}
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
