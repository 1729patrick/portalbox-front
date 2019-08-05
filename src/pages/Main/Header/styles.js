import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  ul {
    display: flex;
    flex-direction: row;

    li {
      color: #fff;
      font-weight: 500;
      font-size: 14.5px;
      cursor: pointer;
      padding: 5px 0;

      & + li {
        margin-left: 25px;
      }

      &:hover {
        padding-bottom: 3.5px;
        border-bottom: solid 1.5px #fff;
      }
    }
  }
`;
