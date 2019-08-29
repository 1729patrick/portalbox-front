import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import ImmobileCard from './Immobile';

export default function GroupImmobiles({
  title,
  style,
  showSize,
  immobiles,
  count,
}) {
  return (
    <Container style={style} oneLine={count <= 4}>
      {title && <h1>{title}</h1>}

      <div>
        {immobiles.map(immobile => (
          <Link to="/imoveis/asdasd" key={immobile.id}>
            <ImmobileCard immobile={immobile} key={immobile.id} />
          </Link>
        ))}
      </div>

      {showSize && count > 8 && <p>Ver todos ({count})</p>}
    </Container>
  );
}

GroupImmobiles.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape(),
  showSize: PropTypes.bool,
  count: PropTypes.number,
  immobiles: PropTypes.arrayOf(
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
  title: '',
  style: {},
  showSize: true,
  count: null,
};
