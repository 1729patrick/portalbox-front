// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// import { Container } from './styles';

// const GreenCheckbox = withStyles({
//   root: {
//     color: '#666',
//     '&$checked': {
//       color: 'rgb(239, 108, 0)',
//     },
//   },
//   checked: {},
// })(props => <Checkbox color="default" {...props} />);

// export default function CheckboxLabels() {
//   const [state, setState] = React.useState({
//     checkedA: false,
//     checkedB: false,
//     checkedF: false,
//     checkedG: false,
//   });

//   const handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked });
//   };

//   return (
//     <Container>
//       <FormControlLabel
//         control={
//           <GreenCheckbox
//             checked={state.checkedG}
//             onChange={handleChange('checkedG')}
//             value="checkedG"
//           />
//         }
//         label="Alugar"
//       />
//       <FormControlLabel
//         control={
//           <GreenCheckbox
//             classes={{ height: 35 }}
//             checked={state.checkedG}
//             onChange={handleChange('checkedG')}
//             value="checkedG"
//           />
//         }
//         label="Comprar"
//       />
//     </Container>
//   );
// }

import React from 'react';

import Toggle from '~/components/Toggle';

import { Container } from './styles';

export default function Type() {
  return (
    <Container>
      <Toggle
        label="O que você precisa?"
        name="finality"
        options={[{ value: 1, name: 'Alugar' }, { value: 2, name: 'Comprar' }]}
        value={1}
      />

      <span>
        <button type="button">Limpar</button>
        <button type="button">Salvar</button>
      </span>
    </Container>
  );
}
