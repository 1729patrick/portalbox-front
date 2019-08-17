import React from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Container, Round } from './styles';

function IncrementDecrement({ title, valueToChange, theme }) {
  return (
    <Container>
      <label>{title}</label>

      <div>
        <Round>
          <IoIosRemove color={theme.incrementDecrement.borderColor} size={22} />
        </Round>

        <h3>{valueToChange}+</h3>

        <Round>
          <IoMdAdd color={theme.incrementDecrement.borderColor} size={19} />
        </Round>
      </div>
    </Container>
  );
}

IncrementDecrement.propTypes = {
  title: PropTypes.string.isRequired,
  valueToChange: PropTypes.number,
  theme: PropTypes.shape({
    incrementDecrement: {
      borderColor: PropTypes.string,
    },
  }).isRequired,
};
IncrementDecrement.defaultProps = {
  valueToChange: 1,
};

export default withTheme(IncrementDecrement);
