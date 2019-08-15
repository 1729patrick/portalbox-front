import React from 'react';

import { Container, Button } from './styles';

export default function Images({ openPreview }) {
  return (
    <Container>
      <div className="img1" onClick={() => openPreview(0)}>
        <div />
      </div>

      <div className="img2" onClick={() => openPreview(1)}>
        <div />
      </div>

      <div className="img3" onClick={() => openPreview(2)}>
        <div />
      </div>

      <div className="img4" onClick={() => openPreview(3)}>
        <div />
      </div>

      <Button text="Ver fotos" onClick={() => openPreview()} />
    </Container>
  );
}
