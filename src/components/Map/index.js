import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '~/components/Checkbox';
import { Container, MapWrapper, MarkerList } from './styles';

import MapContainer from './MapContainer';

import { places } from '~/services/fakeData';

export default function Map({ location, address }) {
  const [selecteds, setSelecteds] = useState([]);

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

          <Checkbox
            list={places}
            checkeds={selecteds}
            setCheckeds={setSelecteds}
            label="title"
            value="id"
          />
        </div>

        <h4>{address}</h4>
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
