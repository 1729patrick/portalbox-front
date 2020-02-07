import React from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Container, Round } from './styles';

function IncreaseDecrease({ title, value, setValue, theme }) {
  const increase = () => {
    if (value === 0) {
      return;
    }

    setValue(value - 1);
  };
  const decrease = () => {
    if (value === 5) {
      return;
    }

    setValue(value + 1);
  };

  return (
    <Container>
      <label>{title}</label>

      <div>
        <Round onClick={increase}>
          <IoIosRemove color={theme.increaseDecrease.borderColor} size={22} />
        </Round>

        <h3>{value}+</h3>

        <Round onClick={decrease}>
          <IoMdAdd color={theme.increaseDecrease.borderColor} size={19} />
        </Round>
      </div>
    </Container>
  );
}

IncreaseDecrease.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  setValue: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    increaseDecrease: PropTypes.shape({
      borderColor: PropTypes.string,
    }),
  }).isRequired,
};

IncreaseDecrease.defaultProps = {
  value: 1,
};

export default withTheme(IncreaseDecrease);
