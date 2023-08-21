import { useLoadScript, GoogleMap, MarkerF, InfoWindow } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { StyledMapContainer } from './GoogleMapComponent.styles';
import { LatLngLiteral } from './GoogleMapComponent.types';

const libraries = ['places'];

export const GoogleMapComponent: NextPage = () => {
  const [infoWindowAnchor, setInfoWindowAnchor] = useState<google.maps.Marker | null>(null);
  const [infoWindowPosition, setInfoWindowPosition] = useState<LatLngLiteral | null>(null);

  const mapCenter = useMemo(() => ({ lat: 27.672932021393862, lng: 85.31184012689732 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const clickedCoords = { lat, lng };
      setInfoWindowAnchor(null);
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
        onClick={(e) => handleMapClick(e)}
      />

      {infoWindowAnchor && (
        <InfoWindow anchor={infoWindowAnchor}>
          <div>This is an info window!</div>
        </InfoWindow>
      )}

      {infoWindowPosition && (
        <MarkerF position={infoWindowPosition} onLoad={(marker) => setInfoWindowAnchor(marker)} />
      )}
    </StyledMapContainer>
  );
};
