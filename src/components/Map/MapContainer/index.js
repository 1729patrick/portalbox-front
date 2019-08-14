/* global google */
import React from 'react';
import { compose, withProps, withHandlers, withState } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
} from 'react-google-maps';
import styles from './GoogleMapStyles.json';
import iconMarker from '~/assets/marker.png';

const token = 'AIzaSyDwaVUBJv9_DE3Sr-C_gyu-B_uVWfIK9x4';
const MapContainer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${token}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  withState('places', 'updatePlaces', ''),
  withHandlers(() => {
    const refs = {
      map: undefined,
      results: undefined,
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },

      fetchPlaces: () => {
        if (refs.results) {
          console.log(refs.results);
          return;
        }
        // { lat: -26.764937, lng: -53.64022 }
        const location = new google.maps.LatLng(-26.724933, -53.532206);
        const service = new google.maps.places.PlacesService(
          refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        );
        const request = {
          location,
          radius: 750,
          types: ['school'],
        };

        const callback = (results, status) => {
          // if (status == google.maps.places.PlacesServiceStatus.OK) {
          refs.results = results;
          // updatePlaces(results);
          // }
        };

        service.nearbySearch(request, callback);
      },
    };
  })
)(props => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: -26.724933, lng: -53.532206 }}
      ref={props.onMapMounted}
      // onBoundsChanged={props.fetchPlaces}
      defaultOptions={{
        disableDefaultUI: false,
        draggable: true,
        keyboardShortcuts: false,
        scrollwheel: true,
        fullscreenControl: false,
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        zoomControl: true,
        styles,
      }}
    >
      <Marker
        position={{ lat: -26.724933, lng: -53.532206 }}
        icon={iconMarker}
      />

      <Circle
        radius={750}
        options={{
          fillColor: 'rgb(239, 108, 0)',
          strokeColor: 'rgb(239, 108, 0)',
        }}
        defaultCenter={{ lat: -26.724933, lng: -53.532206 }}
      />
    </GoogleMap>
  );
});

export default MapContainer;
