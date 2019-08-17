import styled from 'styled-components';

export const FooterWrapper = styled.footer``;

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
      p {
        white-space: nowrap;

        & + p {
          margin-top: 5px;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin-left: 25px;

    li {
      font-weight: 500;
      font-size: 14.5px;
      cursor: pointer;
      padding: 5px 0;
      border-bottom: 2px solid transparent;
      white-space: nowrap;

      &:hover {
        border-color: #444;
      }

      & + li {
        margin-left: 25px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;

    ul {
      display: none;
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

    &: active;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 15px;

    span {
      display: none;
    }
  }
`;
