import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  > h2 {
    font-weight: 500;
    color: #444;
    font-size: 30px;
  }

  h3 {
    font-size: 16px;
    margin-top: 15px;
    font-weight: 500;
    color: #666;

    span {
      text-transform: uppercase;
      color: rgb(239, 108, 0);
      font-weight: 600;
      margin-left: 15px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export const Particulars = styled.div`
  margin-top: 50px;

  h2 {
    font-weight: 500;
    color: #444;
    font-size: 25px;
  }

  ul {
    margin-top: 30px;
    display: flex;
    flex: 1;

    li {
      display: flex;
      align-items: center;
      margin-right: 60px;

      img {
        height: 30px;
      }

      p {
        margin-left: 10px;
        font-weight: 500;
        color: #444;
      }
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;

    p {
      width: 33%;
      display: flex;
      align-items: center;
      height: 40px;
      font-weight: 500;
      color: #444;
    }
  }
`;
