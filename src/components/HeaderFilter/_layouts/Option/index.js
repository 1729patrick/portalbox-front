import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Popup from '../../Popup';

export default function Option({
  index,
  setPopupOpen,
  title,
  popupOpen,
  component,
  selected,
}) {
  return (
    <Container
      onClick={() => setPopupOpen(index)}
      selected={selected || popupOpen === index}
    >
      <Popup
        component={component}
        open={popupOpen === index}
        onClick={() => setPopupOpen(index)}
        onClose={() => {}}
      >
        <span>{title}</span>
      </Popup>
    </Container>
  );
}

Option.propTypes = {
  index: PropTypes.number.isRequired,
  setPopupOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  popupOpen: PropTypes.number.isRequired,
  component: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

Option.defaultProps = {
  selected: false,
};
