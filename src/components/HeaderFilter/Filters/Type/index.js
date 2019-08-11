import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Content } from './styles';
import Checkbox from '~/components/Checkbox';

import { optionsType } from '~/services/fakeData';
import PopupLayout from '../../_layouts/Popup';

export default function Type() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <PopupLayout label="Qual tipo?">
      <Content>
        {optionsType.map(type => (
          <FormControlLabel
            key={type.title}
            control={
              <Checkbox
                checked={state.checkedG}
                onChange={handleChange('checkedG')}
                value="checkedG"
              />
            }
            label={type.title}
          />
        ))}
      </Content>
    </PopupLayout>
  );
}
