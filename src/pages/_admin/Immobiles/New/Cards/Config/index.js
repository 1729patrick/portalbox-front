import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Scope } from '@rocketseat/unform';

import Checkbox from '~/components/Checkbox';
import { sessionsImmobiles } from '~/services/fakeData';
import { Configuration } from './styles';

export default function Config({ sessions, handleSessionChange }) {
  return (
    <Scope path="config">
      <div>
        <h1>
          Configuração <p>(Opcional)</p>
        </h1>

        <p>O imóvel deve ser listado em qual sessão no PORTAL?</p>
      </div>

      <Configuration>
        {sessionsImmobiles.map(type => (
          <FormControlLabel
            key={type.name}
            control={
              <Checkbox
                checked={sessions.indexOf(type._id) !== -1}
                onChange={() => handleSessionChange(type._id)}
                value={type._id}
              />
            }
            label={type.name}
          />
        ))}
      </Configuration>
    </Scope>
  );
}
