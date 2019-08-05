import React from 'react';

import { Container } from './styles';

export default function Button({ text, ...rest }) {
  return <Container {...rest}>{text}</Container>;
}
