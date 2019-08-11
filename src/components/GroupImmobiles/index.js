import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import ImmobileCard from './Immobile';

const listSize = 165;
export default function GroupImmobiles({ title, style, list, showSize }) {
  return (
    <Container style={style}>
      {title && <h1>{title}</h1>}

      <div>
        {list.map(immobile => (
          <Link
            to="/imoveis/ADASDN933D29289J9D9"
            target="__blank"
            key={immobile.id}
          >
            <ImmobileCard immobile={immobile} key={immobile.id} />
          </Link>
        ))}
      </div>

      {showSize && <p>Ver todos ({listSize})</p>}
    </Container>
  );
}

GroupImmobiles.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape(),
  showSize: PropTypes.bool,
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
  title: '',
  style: {},
  showSize: true,
};
