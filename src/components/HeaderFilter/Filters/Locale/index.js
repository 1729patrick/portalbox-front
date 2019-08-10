import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Content } from './styles';
import Checkbox from '~/components/Checkbox';
import DefaultPopupLayout from '../_layouts/DefaultPopup';

import { optionsLocale } from '~/services/fakeData';

export default function Locale() {
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
    <DefaultPopupLayout label="Em qual bairro?">
      <Content>
        {optionsLocale.map(locale => (
          <FormControlLabel
            key={locale.id}
            control={
              <Checkbox
                checked={state.checkedG}
                onChange={handleChange('checkedG')}
                value="checkedG"
              />
            }
            label={locale.title}
          />
        ))}
      </Content>
    </DefaultPopupLayout>
  );
}
