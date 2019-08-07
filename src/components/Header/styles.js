import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 3;

  > div {
    height: 75px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    background: #fff;
    /* border-bottom: solid 1px #ddd; */

    > div {
      flex: 1;
      align-items: center;
      display: flex;

      img {
        width: 175px;
      }

      > div {
        align-items: center;
        display: flex;

        input {
          margin-left: 30px;
          height: 44px;
          padding: 12px 40px 12px 16px;
          border: 0;
          background: #f9f9f9;
          border-radius: 6px;
          width: 400px;
          border: 1px solid #eee;
        }

        svg {
          margin-left: -37px;
        }
      }
    }

    > ul {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      li {
        color: #555;
        font-weight: 500;
        font-size: 15px;
        cursor: pointer;
        height: 75px;
        align-items: center;
        display: flex;
        /* border-bottom: solid 1.5px #eee; */

        & + li {
          margin-left: 25px;
        }

        &:hover {
          border-color: #444;
        }
      }
    }
  }
`;
