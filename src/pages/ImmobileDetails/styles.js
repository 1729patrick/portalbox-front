import styled from 'styled-components';

export const Container = styled.section``;

export const Infos = styled.div`
  padding: 30px 80px;
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
  }
`;

export const ImagesWrapper = styled.div`
  padding: 0 80px;
  height: 400px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
