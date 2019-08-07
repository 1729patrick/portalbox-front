import styled, { css } from 'styled-components';

export const Container = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;

    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      font-weight: 500;
    }
  }
`;

export const Round = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: rgb(239, 108, 0);
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      cursor: auto;
      opacity: 0.4;
    `}
`;
