import styled, { css } from 'styled-components';
import DefaultButton from '~/components/Button';

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

export const ButtonToggle = styled(DefaultButton).attrs(props => ({
  background: props.theme.toggle.backgroundColor,
  color: props.theme.toggle.color,
}))`
  flex: 1;
  transition: 0.2s;
  font-weight: 500;
  border-radius: 25px;

  ${props =>
    !props.active &&
    css`
      background: transparent;
      border: 1.5px solid #cacaca;
      color: #555;

      &:hover {
        border-color: ${props.theme.toggle.backgroundColor};
        color: ${props.theme.toggle.backgroundColor};
        background: transparent;
      }
    `}
  & + button {
    margin-left: 15px;
  }
`;
