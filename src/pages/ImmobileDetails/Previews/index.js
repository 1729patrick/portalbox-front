import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FiX } from 'react-icons/fi';

import { Container, Header } from './styles';

import Map from '~/components/Map';
import ImagesSlider from '~/components/ImagesSlider';

export default function Previews({ page: pageDefaul, onClose }) {
  const [page, setPage] = useState(pageDefaul);

  return (
    <Container>
      <Header>
        <span>
          <button type="button" onClick={() => setPage('images')}>
            Fotos
          </button>
          <button type="button" onClick={() => setPage('map')}>
            Mapa
          </button>
        </span>

        <FiX color="#666" size={40} onClick={onClose} />
      </Header>

      {page === 'images' ? <ImagesSlider /> : <Map />}
    </Container>
  );
}

Previews.propTypes = {
  page: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Previews.defaultProps = {
  page: 'images',
};
