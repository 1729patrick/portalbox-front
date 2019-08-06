import styled from 'styled-components';

export const Container = styled.ul`
  height: 50px;
  width: 100%;
  display: flex;
  padding: 9px 30px 9px 80px;
  position: fixed;
  background: #fff;
  user-select: none;
  border-bottom: solid 1px #ddd;

  > li {
    border: solid 1px #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: #666;
    font-weight: 500;
    font-weight: 500;
    font-size: 14.5px;
    cursor: pointer;
    margin-right: 13px;

    &:hover {
      border-color: rgb(239, 108, 0);
    }

    > span {
      padding: 10px 12px;
    }
  }
`;
