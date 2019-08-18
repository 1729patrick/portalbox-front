import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 100px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  border-bottom: 1px solid #ccc;

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

  div {
    ul {
      display: flex;
      margin-right: 50px;

      li {
        font-weight: 500;
        cursor: pointer;

        & + li {
          margin-left: 30px;
        }

        &:hover {
          color: rgb(239, 108, 0);
        }
      }
    }

    svg {
      cursor: pointer;
    }
  }
`;
