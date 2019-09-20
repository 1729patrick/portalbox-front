import React, { useMemo } from 'react';

import Input from '~/components/Input';

import { Card } from '../styles';

export default function Map({ values, setFieldValue }) {
  const path = useMemo(() => values.map, [values.map]);

  const openGoogleMaps = () => {
    const { address } = values;
    const { city = {} } = address;

    const link = encodeURI(
      `${address.street},${address.number},${city.name}+-+SC,+89905-000`
    );

    window.open(`https://www.google.com/maps/place/${link}`, '_blank');
  };

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
