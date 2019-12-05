import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FiX } from 'react-icons/fi';

import { Container, Header, Button } from './styles';

import Map from '~/components/Map';
import ImagesSlider from '~/components/ImagesSlider';

export default function Preview({ page: pageDefaul, onClose, args }) {
  const [page, setPage] = useState(pageDefaul);

  return (
    <Container>
      <Header>
        <span>
          <Button
            selected={page === 'images'}
            type="button"
            onClick={() => setPage('images')}
          >
            Fotos
          </Button>
          
          {args.location && (
            <Button
              selected={page === 'map'}
              type="button"
              onClick={() => setPage('map')}
            >
              Mapa
            </Button>
          )}
        </span>

        <FiX color="#666" size={40} onClick={onClose} />
      </Header>

      {page === 'images' ? <ImagesSlider {...args} /> : <Map {...args} />}
    </Container>
  );
}

Preview.propTypes = {
  page: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  args: PropTypes.shape(),
};

Preview.defaultProps = {
  page: 'images',
  args: {},
};
