import React from 'react';
import PropTypes from 'prop-types';

import { Container, Images, Image, Button } from './styles';

import fazenda from '../../../assets/fazenda.jpg';
import apartamento from '../../../assets/apartamento.jpg';

export default function HorizontalBackground({
  title,
  style,
  firstTextButton,
  secondTextButton,
  firstOnClick,
  secondOnClick,
}) {
  return (
    <Container style={style}>
      <h1>{title}</h1>

      <Images>
        <Image source={apartamento}>
          <Button text={firstTextButton} onClick={firstOnClick} />
        </Image>
        <Image source={fazenda}>
          <Button text={secondTextButton} onClick={secondOnClick} />
        </Image>
      </Images>
    </Container>
  );
}

HorizontalBackground.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape(),
  firstTextButton: PropTypes.string.isRequired,
  secondTextButton: PropTypes.string.isRequired,
  firstOnClick: PropTypes.func.isRequired,
  secondOnClick: PropTypes.func.isRequired,
};

HorizontalBackground.defaultProps = {
  title: '',
  style: {},
};
