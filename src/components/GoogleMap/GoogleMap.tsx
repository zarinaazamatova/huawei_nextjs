import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import { StyledMapContainer } from './GoogleMap.styles';
import { GoogleMapProps, LatLngLiteral } from './GoogleMap.types';
import { Spinner } from '../Spinner';

const libraries = ['places'];

export const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  latitude,
  longitude,
}: GoogleMapProps) => {
  const [infoWindowPosition, setInfoWindowPosition] = useState<LatLngLiteral | null>(null);

  const mapCenter = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as [],
  });

  if (!isLoaded) {
    return <Spinner />;
  }

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const clickedCoords = { lat, lng };
      setInfoWindowPosition(clickedCoords);
    }
  };

  return (
    <StyledMapContainer>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '30vh' }}
        onLoad={() => console.log('Map Component Loaded...')}
        onClick={handleMapClick}
      />

      {infoWindowPosition && <MarkerF position={infoWindowPosition} />}
    </StyledMapContainer>
  );
};
