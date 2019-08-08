import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #fff;
  user-select: none;
  padding-left: 50px;

  > li {
    display: flex;
    align-items: center;
    height: 32px;
    border: solid 1px #c6c6c6;
    color: #444;
    border-radius: 25px;
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
