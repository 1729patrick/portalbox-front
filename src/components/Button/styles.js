import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  width: 100px;
  background: rgb(239, 108, 0);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s;
  min-height: 44px;
  height: 44px;

  &:hover {
    background: ${darken(0.04, 'rgb(239, 108, 0)')};
  }
`;
