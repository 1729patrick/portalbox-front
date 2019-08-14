import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '~/components/Checkbox';
import { Container, MapWrapper, MarkerList } from './styles';

import MapContainer from './MapContainer';

import { places } from '~/services/fakeData';

export default function Map() {
  return (
    <Container>
      <MapWrapper>
        <MapContainer />
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
              label={place.title}
            />
          ))}
        </div>

        <h4>Rua Maria Lúcia da Paz - Gleba Fazenda Palhano, Londrina - PR</h4>
      </MarkerList>
    </Container>
  );
}
