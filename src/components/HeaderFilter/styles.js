import styled from 'styled-components';

export const Container = styled.ul`
  height: 50px;
  width: 100%;
  display: flex;
  padding: 9px 30px 9px 80px;
  position: fixed;
  background: #fff;
  user-select: none;
  /* border-bottom: solid 1px #ddd; */
  box-shadow: 0px 1px 20px 0px rgba(46, 61, 73, 0.2);
  z-index: -1;

  > li {
    border: solid 1px #ccc;
    color: #444;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-weight: 500;
    font-size: 14.5px;
    margin-right: 13px;

    &:hover {
      border-color: rgb(239, 108, 0);
    }

    > span {
      padding: 10px 12px;
      cursor: pointer;
      color: #666;

      &:hover {
        color: rgb(239, 108, 0);
      }
    }
  }
`;
