import React, { useMemo } from 'react';

import Checkbox from '~/components/Checkbox';
import { sessionsImmobiles } from '~/services/fakeData';
import { Configuration } from './styles';
import { Card } from '../styles';

export default function Config({ values, setFieldValue }) {
  const path = useMemo(() => values.config, [values.config]);

  return (
    <Card>
      <div>
        <h1>
          Configuração <p>(Opcional)</p>
        </h1>

        <p>O imóvel deve ser listado em qual sessão no PORTAL?</p>
      </div>
      <Configuration>
        <Checkbox
          label="name"
          value="_id"
          list={sessionsImmobiles}
          checkeds={path.sessions}
          setCheckeds={value => setFieldValue('config.sessions', value)}
        />
      </Configuration>
    </Card>
  );
}
