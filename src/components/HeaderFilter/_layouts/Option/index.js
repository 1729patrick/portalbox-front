import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Popup from '../../Popup';

export default function Option({
  index,
  setPopupOpen,
  text,
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
        <span>{text}</span>
      </Popup>
    </Container>
  );
}

Option.propTypes = {
  index: PropTypes.number.isRequired,
  setPopupOpen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  popupOpen: PropTypes.number.isRequired,
  component: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

Option.defaultProps = {
  selected: false,
};
