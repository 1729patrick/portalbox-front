/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container } from './styles';

const Checkbox = ({ label, value, list, checkeds, setCheckeds }) => {
  const handleChange = item => {
    const checked = checkeds.find(checked => checked[value] === item[value]);

    if (!checked) {
      setCheckeds([...checkeds, item]);
    } else {
      setCheckeds(checkeds.filter(checked => checked[value] !== item[value]));
    }
  };

  return (
    <Container>
      {list.map(item => (
        <FormControlLabel
          key={item[value]}
          control={
            <MaterialCheckbox
              checked={checkeds.find(checked => checked[value] === item[value])}
              onChange={() => handleChange(item)}
              value={item[value]}
            />
          }
          label={item[label]}
          labelPlacement="end"
        />
      ))}
    </Container>
  );
};

Checkbox.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  checkeds: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
      PropTypes.shape(),
    ])
  ),
  setCheckeds: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  checkeds: [],
};
export default Checkbox;
