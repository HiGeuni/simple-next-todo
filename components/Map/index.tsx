import { useCallback, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import dotenv from 'dotenv';
import { Icon } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import googleMapReact from 'google-map-react';

dotenv.config();

interface ILocation {
  lat: number;
  lng: number;
}

const Marker = (props: ILocation) => (
  <div className={'marker'}>
    <Icon component={LocationOn} className={'pinIcon'} />
  </div>
);

const MapComponent = () => {
  // 서울시청 좌표
  const [loc, setLoc] = useState<ILocation>({
    lat: 37.5666805,
    lng: 126.9784147,
  });
  const [markers, setMarkers] = useState<ILocation[]>([]);

  const onClickMap = useCallback(
    (e: googleMapReact.ClickEventValue) => {
      const l: ILocation = {
        lat: e.lat,
        lng: e.lng,
      };
      setMarkers((prev) => [l]);
    },
    [setMarkers],
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoc({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (e) => {
          console.log(e);
        },
      );
    }
  }, [setLoc]);

  return (
    <div style={{ height: '90%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY! }}
        defaultZoom={20}
        onClick={onClickMap}
        center={loc}
      >
        {markers.length !== 0 && <Marker {...markers[0]} />}
      </GoogleMapReact>
    </div>
  );
};
export default MapComponent;
