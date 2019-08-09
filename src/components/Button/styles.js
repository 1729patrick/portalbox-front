import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  height: 44px;
  width: 100px;
  background: rgb(239, 108, 0);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  margin-left: auto;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.04, 'rgb(239, 108, 0)')};
  }
`;
