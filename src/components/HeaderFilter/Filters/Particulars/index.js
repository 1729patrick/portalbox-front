import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import IncrementDecrement from '~/components/IncrementDecrement';

import { Container } from './styles';

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 52,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'rgb(239, 108, 0)',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: 'rgb(239, 108, 0)',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Container>
      <label>Com quais características?</label>

      <div>
        <IncrementDecrement />
        <IncrementDecrement />
        <IncrementDecrement />
        <FormControlLabel
          control={
            <IOSSwitch
              checked={state.checkedB}
              onChange={handleChange('checkedB')}
              value="checkedB"
            />
          }
          label="Piscina"
          labelPlacement="start"
        />

        <FormControlLabel
          control={
            <IOSSwitch
              checked={state.checkedB}
              onChange={handleChange('checkedB')}
              value="checkedB"
            />
          }
          label="Piscina"
          labelPlacement="start"
        />
      </div>

      <span>
        <button type="button">Limpar</button>
        <button type="button">Salvar</button>
      </span>
    </Container>
  );
}
