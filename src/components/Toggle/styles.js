import styled, { css } from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

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
  flex: 1;
`;

export const ButtonToggle = styled(Button)`
  flex: 1;
  transition: 0.2s;
  font-weight: 500;
  border-radius: 25px;

  ${props =>
    !props.active &&
    css`
      background: transparent;
      border: 1.5px solid #cacaca;
      color: #666;

      &:hover {
        border-color: rgb(239, 108, 0);
        color: rgb(239, 108, 0);
        background: transparent;
      }
    `}
  & + button {
    margin-left: 15px;
  }
`;
