import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Container } from './styles';
import ImmobileCard from './models/ImmobileWithDescription';

function GroupImmobiles({ title, style, showSize, immobiles, count, history }) {
  const openDetails = (_id, address) => {
    history.push(`imoveis/${_id}/${address}`);
  };

  return (
    <Container style={style} count={count}>
      {title && <h1>{title}</h1>}

      {immobiles.length > 0 && (
        <div>
          {immobiles.map(immobile => (
            <ImmobileCard
              immobile={immobile}
              key={immobile._id}
              openDetails={openDetails}
            />
          ))}
        </div>
      )}

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
      _id: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          file: PropTypes.string.isRequired,
        })
      ).isRequired,
      address: PropTypes.shape({
        number: PropTypes.number,
        neighborhood: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
        street: PropTypes.string.isRequired,
      }),
      price: PropTypes.shape({
        rent: PropTypes.number,
        sale: PropTypes.number,
      }),
      particulars: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          value: PropTypes.any.isRequired,
        })
      ),
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
