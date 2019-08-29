import React from 'react';
import { Scope } from '@rocketseat/unform';

import Input from '~/components/Input';

export default function Cards() {
  const openGoogleMaps = () => {
    // https://www.google.com/maps/place/R.+1%C2%BA+de+Maio,+1425,+Bandeirante+-+SC,+89905-000
    // const address =
    window.open(`https://www.google.com/maps/place/`, '_blank');
  };

  return (
    <Scope path="map">
      <div>
        <h1>
          Mapa <p>(Opcional)</p>
        </h1>
        <p>
          Se as coordenadas estiverem vazias não será possível exibir o imóvel
          no mapa do PORTAL
        </p>
      </div>

      <Input
        type="text"
        name="lat"
        label="Latitude"
        placeholder="Digite a latidode da localização"
      />
      <Input
        type="text"
        name="lng"
        label="Longitude"
        placeholder="Digite a longitude da localização"
      />

      <button type="button" onClick={openGoogleMaps}>
        Buscar coordenadas no Google Maps
      </button>
    </Scope>
  );
}
