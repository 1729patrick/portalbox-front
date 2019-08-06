import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { Container } from './styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#555',
    '&$checked': {
      color: 'rgb(239, 108, 0)',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

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
    <Container>
      <label>Em qual bairro?</label>

      <div>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange('checkedG')}
              value="checkedG"
            />
          }
          label="Centro"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange('checkedG')}
              value="checkedG"
            />
          }
          label="Agostini"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange('checkedG')}
              value="checkedG"
            />
          }
          label="Andreatta"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange('checkedG')}
              value="checkedG"
            />
          }
          label="São Jorge"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedG}
              onChange={handleChange('checkedG')}
              value="checkedG"
            />
          }
          label="São Luiz"
        />
      </div>

      <span>
        <button type="button">Limpar</button>
        <button type="button">Salvar</button>
      </span>
    </Container>
  );
}
