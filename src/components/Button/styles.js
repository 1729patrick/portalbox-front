import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.button`
  width: 100px;
  background: ${props => props.background};
  color: ${props => props.color};
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.3s;
  min-height: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.disabled
      ? css`
          cursor: no-drop;
          background: ${props =>
            props.background && lighten(0.16, props.background)};
        `
      : css`
          &:hover {
            background: ${props =>
              props.background && darken(0.06, props.background)};
          }
        `}
`;
