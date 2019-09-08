import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { useField } from '@rocketseat/unform';
import { withStyles } from '@material-ui/core/styles';
import MaterialSwitch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import globalTheme from '~/styles/theme';

const CustomSwitch = withStyles(theme => ({
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
        backgroundColor: globalTheme.switch.checkedColor,
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: globalTheme.switch.checkedColor,
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
}))(
  forwardRef(({ classes, label, value, onChange, ...props }, ref) => {
    return (
      <MaterialSwitch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        checked={value}
        onChange={event => onChange(event.target.checked)}
        value={value}
        ref={ref}
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
  })
);

const Switch = ({ style, name, label }) => {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.value',
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <FormControlLabel
      style={style}
      control={
        <CustomSwitch
          ref={ref}
          data-value={value}
          value={value}
          onChange={setValue}
        />
      }
      label={label}
      labelPlacement="start"
    />
  );
};

export default Switch;
