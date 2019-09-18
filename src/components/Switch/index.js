import React from 'react';
import { withTheme } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import MaterialSwitch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { styles } from './styles';

const CustomSwitch = withStyles(styles)(
  ({ classes, value, onChange, theme, ...props }) => {
    return (
      <MaterialSwitch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        checked={value}
        onChange={event => onChange(event.target.checked)}
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
  }
);

const Switch = ({ title, value, setValue, theme }) => {
  return (
    <FormControlLabel
      control={<CustomSwitch value={value} onChange={setValue} theme={theme} />}
      label={title}
      labelPlacement="start"
    />
  );
};

export default withTheme(Switch);
