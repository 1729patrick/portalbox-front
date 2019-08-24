import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  background: #f4f7fb;
  padding: 0 100px;
  z-index: 2;

  > div {
    height: 75px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* repetido */
    div {
      display: flex;
      align-items: center;

      h1 {
        color: rgb(239, 108, 0);
        margin-right: 2px;
        font-size: 30px;
        margin-top: 8px;
      }
    }

    aside {
      display: flex;
      align-items: center;

      div {
        margin-right: 50px;

        a {
          color: #333;
          font-weight: 500;

          & + a {
            margin-left: 40px;
          }

          &:hover {
            color: rgb(239, 108, 0);
          }

          &.active {
            color: rgb(239, 108, 0);
          }
        }
      }

      svg {
        cursor: pointer;
      }
    }
  }
`;
