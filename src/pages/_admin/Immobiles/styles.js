import styled, { css } from 'styled-components';

export const Container = styled.section`
  height: auto;
  display: flex;
  height: 100%;
`;

export const Options = styled.div`
  height: 100%;
  width: 25%;
  position: fixed;

  h2 {
    font-size: 28px;
    font-weight: 600;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonOption = styled.button`
  border: none;
  background: transparent;
  font-weight: 500;
  color: #666;
  margin-top: 20px;
  text-align: left;
  font-size: 15px;
  padding: 12px 0;

  ${props =>
    props.active &&
    css`
      background: #e8e8e8;
      color: rgb(239, 108, 0);
      width: 70%;
      border-radius: 4px 50px 50px 4px;
    `}
`;

export const Content = styled.div`
  flex: 1;
  margin: 0 -30px 0 30px;
  padding: 55px 30px 0 25%;
`;
