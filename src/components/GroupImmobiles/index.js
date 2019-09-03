import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';
import ImmobileCard from './Immobile1';

function GroupImmobiles({ title, style, showSize, immobiles, count, history }) {
  const openDetails = (_id, address) => {
    history.push(`imoveis/${_id}/${address}`);
  };

  return (
    <Container style={style} oneLine={count <= 4}>
      {title && <h1>{title}</h1>}

      <div>
        {immobiles.map(immobile => (
          <ImmobileCard
            immobile={immobile}
            key={immobile._id}
            openDetails={openDetails}
          />
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

export default withRouter(GroupImmobiles);
