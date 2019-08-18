import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Switch from '~/components/Switch';

import { Content } from './styles';
import PopupLayout from '../../_layouts/Popup';

import { optionsParticularAdvanced } from '~/services/fakeData';

export default function Advanced() {
  return (
    <PopupLayout label="Filtro avançado">
      <Content>
        {optionsParticularAdvanced.map(especification => (
          <FormControlLabel
            key={especification.id}
            control={
              <Switch checked={false} onChange={() => {}} value="checkedB" />
            }
            label={especification.title}
            labelPlacement="start"
          />
        ))}
      </Content>
    </PopupLayout>
  );
}
