import React from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import PropTypes from 'prop-types';

import { Container, Round } from './styles';

export default function IncrementDecrement({ title, valueToChange }) {
  return (
    <Container>
      <label>{title}</label>

      <div>
        <Round>
          <IoIosRemove color="rgb(239, 108, 0)" size={22} />
        </Round>

        <h3>{valueToChange}+</h3>

        <Round>
          <IoMdAdd color="rgb(239, 108, 0)" size={19} />
        </Round>
      </div>
    </Container>
  );
}

IncrementDecrement.propTypes = {
  title: PropTypes.string.isRequired,
  valueToChange: PropTypes.number,
};
IncrementDecrement.defaultProps = {
  valueToChange: 1,
};
