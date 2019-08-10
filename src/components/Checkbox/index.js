import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const CustomCheckbox = withStyles({
  root: {
    color: '#777',
    '&$checked': {
      color: 'rgb(239, 108, 0)',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default CustomCheckbox;
