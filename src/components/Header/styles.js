import styled from 'styled-components';

export const Container = styled.div`
  height: 75px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  position: fixed;
  background: #fff;
  z-index: 2;
  border-bottom: solid 1px #ddd;

  div {
    flex: 1;
    align-items: center;
    display: flex;

    img {
      width: 175px;
    }
    
    input {
      margin-left: 30px;
      height: 44px;
      padding: 12px;
      border: 0;
      background: #f9f9f9;
      border-radius: 4px;
      width: 300px;
      border: 1px solid #eee;
    }
  }
  ul {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li {
      color: #444;
      font-weight: 500;
      font-size: 15px;
      cursor: pointer;
      height: 75px;
      align-items: center;
      display: flex;
      border-bottom: solid 1.5px #eee;

      & + li {
        margin-left: 25px;
      }

      &:hover {
        border-color: #444;
      }
    }
  }
`;
