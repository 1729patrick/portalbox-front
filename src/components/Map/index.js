import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { IoIosFlag } from 'react-icons/io';

import Checkbox from '~/components/Checkbox';
import { Container, MapWrapper, MarkerList } from './styles';

import MapContainer from './MapContainer';

import { places } from '~/services/fakeData';

export default function Map({ location }) {
  return (
    <Container>
      <MapWrapper>
        <MapContainer location={location} />
      </MapWrapper>

      <MarkerList>
        <div>
          <p>
            Locais próximos <span>(750m)</span>
          </p>
          {places.map(place => (
            <FormControlLabel
              key={place.id}
              control={
                <Checkbox
                  checked={false}
                  onChange={() => console.log('eee')}
                  value="checkedG"
                />
              }
              labelPlacement="start"
              label={
                <>
                  <IoIosFlag size={22} color={place.color} />
                  {place.title}
                </>
              }
            />
          ))}
        </div>

        <h4>Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR</h4>
      </MarkerList>
    </Container>
  );
}

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
