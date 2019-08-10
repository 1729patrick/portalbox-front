import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import IncrementDecrement from '~/components/IncrementDecrement';
import Switch from '~/components/Switch';

import { Content } from './styles';
import DefaultPopupLayout from '../_layouts/DefaultPopup';

import { optionsParticular } from '~/services/fakeData';

export default function Especification() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <DefaultPopupLayout label="Com quais características?">
      <Content>
        {optionsParticular.map(especification => {
          if (especification.type === 'range') {
            return (
              <IncrementDecrement
                key={especification.id}
                title={especification.title}
                valueToChange={especification.valueToChange}
              />
            );
          }

          return (
            <FormControlLabel
              key={especification.id}
              control={
                <Switch
                  checked={state.checkedB}
                  onChange={handleChange('checkedB')}
                  value="checkedB"
                />
              }
              label={especification.title}
              labelPlacement="start"
            />
          );
        })}
      </Content>
    </DefaultPopupLayout>
  );
}
