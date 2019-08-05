import styled, { css } from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.div`
  label {
    margin-bottom: 7px;
    display: block;
  }

  input {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
`;

export const ButtonToggle = styled(Button)`
  flex: 1;
  transition: 0.2s;
  font-weight: 500;

  ${props =>
    !props.active &&
    css`
      background: transparent;
      border: 1px solid #ccc;
      color: #555;

      &:hover {
        border-color: rgb(239, 108, 0);
        background: transparent;
      }
    `}
  & + button {
    margin-left: 15px;
  }
`;
