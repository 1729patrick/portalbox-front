import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import ImmobileCard from './Immobile';

const listSize = 165;
export default function GroupImmobiles({ style, list }) {
  return (
    <Container style={style}>
      <h1>Destaques</h1>

      <div>
        {list.map(imobile => (
          <ImmobileCard imobile={imobile} key={imobile.id} />
        ))}
      </div>

      <p>Ver todos ({listSize})</p>
    </Container>
  );
}

GroupImmobiles.propTypes = {
  style: PropTypes.shape,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      images: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      priceFormatted: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      roomsFormatted: PropTypes.string.isRequired,
      garagesFormatted: PropTypes.string.isRequired,
      bathroomsFormatted: PropTypes.string.isRequired,
      area: PropTypes.number.isRequired,
    })
  ).isRequired,
};

GroupImmobiles.defaultProps = {
  style: {},
};
