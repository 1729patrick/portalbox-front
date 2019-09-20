import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px 80px;
  display: flex;
  height: 100%;

  img {
    border-radius: 8px;
    width: 500px;
    box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1);
  }

  > div {
    padding: 0 30px;

    h1 {
      font-size: 32px;
      color: #333;
    }

    span {
      display: block;
      margin-top: 20px;
      font-size: 14px;
      line-height: 24px;
      text-align: justify;
      color: #333;
      font-weight: 500;

      button {
        border: none;
        background: transparent;
        font-weight: 600;
      }
    }

    div {
      margin: 20px 0;

      p {
        color: #333;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
`;
