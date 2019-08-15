import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0 30px;
  z-index: 2;

  ${props =>
    props.overlay
      ? css`
          background: transparent;
        `
      : css`
          background: #fff;
          box-shadow: 0px 1px 20px 0px rgba(46, 61, 73, 0.2);
          position: fixed;
        `};

  > div {
    display: flex;
    width: 100%;
    height: 75px;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 125px;
    }

    ul {
      display: flex;
      flex-direction: row;

      li {
        ${props =>
          props.contranstLight
            ? css`
                color: #fff;

                &:hover {
                  padding-bottom: 5.5px;
                  border-bottom: solid 1.5px #fff;
                }
              `
            : css`
                color: #444;

                &:hover {
                  padding-bottom: 5.5px;
                  border-bottom: solid 1.5px #888;
                }
              `};

        font-weight: 500;
        font-size: 14.5px;
        cursor: pointer;
        padding: 7px 0;

        & + li {
          margin-left: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 45px;
  padding: 0 50px;

  input {
    height: 100%
    flex: 1;
    padding: 0 45px 0 20px;
    border-radius: 30px;
    background: #eee;
    border: 0;
    color: #444;
    font-size: 15px;

    ::placeholder {
      color: #555;
      font-size: 14.5px;
      font-weight: 500;
    }
  }

  svg {
    margin-left: -40px;
  }
`;
