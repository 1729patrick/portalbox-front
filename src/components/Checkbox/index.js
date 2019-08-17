import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import theme from '~/styles/theme';

const styles = {
  root: {
    color: theme.checkbox.color,
    '&$checked': {
      color: theme.checkbox.checkedColor,
    },
  },
  checked: {},
};

const CustomCheckbox = props => {
  return <Checkbox color="default" {...props} />;
};

export default withStyles(styles)(CustomCheckbox);
