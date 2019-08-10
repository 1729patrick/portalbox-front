import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 80px;
  background: #eee;
  font-weight: 500;
  color: #444;
  border-bottom: 1px solid #ccc;

  div {
    display: flex;
    align-items: center;

    img {
      font-size: 16px;
      max-width: 150px;
      margin-right: 15px;
      padding-right: 15px;
      border-right: 2px solid #ccc;
    }

    span {
      p + p {
        margin-top: 5px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;

    li {
      font-weight: 500;
      font-size: 14.5px;
      cursor: pointer;
      padding: 7px 0;

      &:hover {
        color: rgb(239, 108, 0);
      }

      & + li {
        margin-left: 25px;
      }
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  color: #444;
  font-weight: 400;
  background: #eee;

  text-transform: uppercase;

  p + p {
    margin-top: 5px;
  }
`;
