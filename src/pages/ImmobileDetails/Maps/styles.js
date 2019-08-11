import styled from 'styled-components';

import DefaultButton from '~/components/Button';
import map from '~/assets/maps.png';

export const Container = styled.div`
  position: relative;
  width: 100%;

  header {
    padding: 50px 80px;
    border-top: 1px solid #eaeaea;

    h2 {
      font-size: 25px;
      color: #444;
      font-weight: 500;
    }

    p {
      margin-top: 5px;
      font-size: 16px;
      color: #666;
    }
  }
`;

export const MapsImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: url(${map}) center no-repeat;
    background-size: cover;
    height: 450px;
    width: 100%;
  }

  span {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
`;

export const ButtonExplore = styled(DefaultButton).attrs({
  background: '#fff',
  color: '#444',
})`
  position: absolute;
  width: 175px;
  bottom: 50px;
`;
