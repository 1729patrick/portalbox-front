import React, { useState, useEffect } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import styles from './GoogleMapStyles.json';

import { Container, MapWrapper, MarkerList } from './styles';

const token = 'AIzaSyDZQG7Wu1SoDShLGXdBHQ3klbEcfxmlyKI';
const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${token}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -26.764937, lng: -53.64022 }}
    defaultOptions={{
      disableDefaultUI: false,
      draggable: true,
      keyboardShortcuts: false,
      scrollwheel: false,
      fullscreenControl: false,
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false,
      zoomControl: false,
      styles,
    }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -26.764937, lng: -53.64022 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

export default function MyFancyComponent() {
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  };

  useEffect(delayedShowMarker, []);

  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker();
  };

  return (
    <Container>
      <MapWrapper>
        <MyMapComponent
          isMarkerShown={isMarkerShown}
          onMarkerClick={handleMarkerClick}
        />
      </MapWrapper>

      <MarkerList>x</MarkerList>
    </Container>
  );
}
