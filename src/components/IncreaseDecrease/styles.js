import styled, { css } from 'styled-components';

export const Container = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  & + label {
    margin-top: 10px;
  }

  > div {
    display: flex;
    flex-direction: row;

    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      font-weight: 500;
      color: #666;
    }
  }
`;

export const Round = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: ${props => `${props.theme.increaseDecrease.borderColor} solid 1px`};
  cursor: pointer;
  transition: 400ms;

  &:hover {
    background: ${props => props.theme.increaseDecrease.borderColor};

    svg path {
      color: #fff;
    }
  }

  ${props =>
    props.disabled &&
    css`
      cursor: auto;
      opacity: 0.4;
    `}
`;
