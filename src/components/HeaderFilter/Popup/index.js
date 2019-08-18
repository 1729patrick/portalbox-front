import React from 'react';
import PropTypes from 'prop-types';
import ReactPopup from 'reactjs-popup';

export default function Popup({
  component: Component,
  open,
  children,
  onClick,
  onClose,
  index,
}) {
  return (
    <ReactPopup
      trigger={children}
      position="bottom left"
      arrow={false}
      offsetY={6}
      open={open}
      onClose={() => onClose(index)}
    >
      <span onClick={onClick}>
        <Component />
      </span>
    </ReactPopup>
  );
}

Popup.propTypes = {
  component: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
