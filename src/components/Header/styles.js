import styled, { css } from 'styled-components';
import { lighten } from 'polished';

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
          background: ${props.theme.header.backgroundColor};
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
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: row;
      overflow-x: auto;

      button {
        white-space: nowrap;
        background: transparent;
        border: none;

        ${props =>
          props.contranstLight
            ? css`
                color: ${props.theme.header.color};

                &:hover {
                  padding-bottom: 5.5px;
                  border-bottom: solid 1.5px ${props.theme.header.color};
                }
              `
            : css`
                color: ${props.theme.header.colorDark};

                &:hover {
                  padding-bottom: 5.5px;
                  border-bottom: solid 1.5px ${props.theme.header.colorDark};
                }
              `};

        &.active {
          padding-bottom: 5.5px;
          border-bottom: solid 1.5px ${props => props.theme.header.color};
        }

        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        padding: 7px 0;

        & + button {
          margin-left: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px 0 0;

    ul {
      padding-left: 10px;

      li + li {
        margin-left: 15px !important;
      }
    }
  }

  > div img {
    max-width: 90px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 45px;
  padding: 0 50px;

  input {
    height: 100%;
    width: 70%;
    padding: 0 45px 0 20px;
    border-radius: 30px;
    background: ${props => props.theme.header.search.backgroundColor};
    border: 0;
    color: ${props => props.theme.header.search.color};
    font-size: 15px;

    ::placeholder {
      color: ${props => lighten(0.07, props.theme.header.search.color)};
      font-size: 14.5px;
      font-weight: 500;
    }
  }

  svg {
    margin-left: -40px;
  }

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;
