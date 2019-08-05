import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  padding: 9px 30px 9px 80px;
  position: fixed;
  background: #fff;
  margin-top: 75px;

  border-bottom: solid 1px #ddd;
  z-index: 1;

  div {
    border: solid 1px #ddd;
    padding: 10px 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: #666;
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;

    & + div {
      margin-left: 13px;
    }
  }
`;
