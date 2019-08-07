import React from 'react';
import ReactPopup from 'reactjs-popup';
// import { Container } from './styles';

export default function Popup({
  component: Component,
  open,
  children,
  onClick,
}) {
  return (
    <ReactPopup
      trigger={children}
      position="bottom left"
      arrow={false}
      offsetY={5}
      open={open}
    >
      <span onClick={onClick}>
        <Component />
      </span>
    </ReactPopup>
  );
}
