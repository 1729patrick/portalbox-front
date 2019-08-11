import React from 'react';
import PropTypes from 'prop-types';

import { Container, Images, Image, Button } from './styles';

export default function HorizontalBackground({
  title,
  style,
  firstTextButton,
  secondTextButton,
}) {
  return (
    <Container style={style}>
      <h1>{title}</h1>

      <Images>
        <Image source="https://resources.aluguetemporada.com.br/info/files/live/sites/br/files/contributed/shared/marketing/imagens/Owner%20Marketing/Posts_Blog_Owner/Novidades_AT/luxury-rentals-big--ts-2015-09-21T16%3A28%3A20_773-05%3A00.jpg">
          <Button text={firstTextButton} />
        </Image>
        <Image source="http://media-room5.trivago.com/wp-content/uploads/2018/02/09112455/hoteis-fazenda-sc-curucaca-bom-retiro-area-externa.jpg">
          <Button text={secondTextButton} />
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
};

HorizontalBackground.defaultProps = {
  title: '',
  style: {},
};
