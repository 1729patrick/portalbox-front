import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 100px;
  height: 100%;

  > div {
    height: 100%;
    padding-top: 115px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
