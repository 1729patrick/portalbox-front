import React, { useMemo } from 'react';

import Input from '~/components/Input';

import { Card } from '../../styles';

export default function Map({ values, setFieldValue }) {
  const openGoogleMaps = () => {
    // https://www.google.com/maps/place/R.+1%C2%BA+de+Maio,+1425,+Bandeirante+-+SC,+89905-000
    // const address =
    window.open(`https://www.google.com/maps/place/`, '_blank');
  };

  const path = useMemo(() => values.map, [values.map]);

  return (
    <Card>
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
        label="Latitude"
        placeholder="Digite a latidode da localização"
        value={path.lat}
        setValue={value => setFieldValue('map.lat', value)}
      />

      <Input
        type="text"
        label="Longitude"
        placeholder="Digite a longitude da localização"
        value={path.lng}
        setValue={value => setFieldValue('map.lng', value)}
      />

      <button type="button" onClick={openGoogleMaps}>
        Buscar coordenadas no Google Maps
      </button>
    </Card>
  );
}
