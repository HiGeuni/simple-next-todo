import { LegendToggleOutlined } from '@mui/icons-material';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useState, useEffect } from 'react';

interface ILocation {
  lat: number;
  lng: number;
}

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
  });

  const [loc, setLoc] = useState<ILocation>({ lat: 0, lng: 0 });
  const [markers, setMarkers] = useState<ILocation[]>([]);

  const onClickMap = useCallback((e: google.maps.MapMouseEvent) => {
    console.log(e.latLng?.lat);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoc({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return isLoaded && loc.lat ? (
    <GoogleMap
      mapContainerStyle={{
        width: '90%',
        // height: '70%',
        aspectRatio: 1,
      }}
      center={loc}
      zoom={15}
      onClick={onClickMap}
    >
      {/* todo : marker */}
      {/* {markers.map((mark, index) => (
        <Marker key={index} position={mark} />
      ))} */}
      {/* {child} */}
    </GoogleMap>
  ) : (
    <>Cannot Load API</>
  );
};

export default MapComponent;
