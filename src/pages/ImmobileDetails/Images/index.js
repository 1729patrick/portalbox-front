import React from 'react';

import { Container, Button } from './styles';

export default function Images({ openPreview }) {
  return (
    <Container>
      <div className="img1">
        <div />
      </div>

      <div className="img2">
        <div />
      </div>

      <div className="img3">
        <div />
      </div>

      <div className="img4">
        <div />
      </div>

      <Button text="Ver fotos" onClick={openPreview} />
    </Container>
  );
}
