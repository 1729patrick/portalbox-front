import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > div {
    margin: 0 -30px;
    padding: 4px 30px;

    /* &:hover {
      background: #f8f8f8;
    } */

    > div {
      margin-bottom: 20px;
    }
  }
`;
