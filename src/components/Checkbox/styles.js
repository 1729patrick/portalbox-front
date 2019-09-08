import theme from '~/styles/theme';

export const styles = {
  root: {
    color: theme.checkbox.color,
    '&$checked': {
      color: theme.checkbox.checkedColor,
    },
    marginLeft: '-10px !important',
  },
  checked: {},
};
