import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MaterialSwitch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { styles, Container } from './styles';

const CustomSwitch = withStyles(styles)(
  ({ classes, value, onChange, ...props }) => {
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

const Switch = ({ title, value, setValue }) => {
  return (
    <Container>
      <FormControlLabel
        control={<CustomSwitch value={value} onChange={setValue} />}
        label={title}
        labelPlacement="start"
      />
    </Container>
  );
};

Switch.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
};

Switch.defaultProps = {
  value: false,
};

export default Switch;
