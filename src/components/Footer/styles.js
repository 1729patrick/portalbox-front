import styled from 'styled-components';

export const FooterWrapper = styled.footer``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 60px;
  background: #eee;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 768px) {
    display: none;
  }
  > div {
    display: flex;
    align-items: center;

    > div {
      display: block;
      white-space: nowrap;
      text-align: justify;

      div {
        & + div {
          margin-top: 15px;
        }
      }

      span,
      p {
        font-size: 14px;
        color: #333;
        font-weight: 500;
        line-height: 24px;
        font-size: 14.5px;
      }

      p {
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }

        &:hover {
          color: #000;
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
      font-size: 14px;
      cursor: pointer;
      padding: 5px 0;
      border-bottom: 2px solid transparent;
      white-space: nowrap;

      &:hover {
        border-color: #333;
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
  color: #333;
  font-weight: 400;
  background: #eee;

  text-transform: uppercase;

  p + p {
    margin-top: 5px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 15px;

    span {
      display: none;
    }
  }
`;

export const Socials = styled.div`
  border-right: 2px solid #ccc;
  margin-right: 17px;
  padding-right: 17px;

  img {
    max-width: 150px;
    margin: 0 auto;
    display: flex;
  }

  /* div {
    position: absolute;
    right: 60px;
  } */

  button {
    border: none;
    background: transparent;
    font-weight: 600;

    & + button {
      svg {
        margin-left: 15px;
      }
    }
  }
`;
