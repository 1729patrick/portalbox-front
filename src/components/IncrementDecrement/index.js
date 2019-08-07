import React from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';

import { Container, Round } from './styles';

export default function IncrementDecrement({ label }) {
  return (
    <Container>
      <label>Banheiros</label>

      <div>
        <Round disabled>
          <IoIosRemove color="#fff" size={23} />
        </Round>

        <h3>3+</h3>

        <Round>
          <IoMdAdd color="#fff" size={21} />
        </Round>
      </div>
    </Container>
  );
}
