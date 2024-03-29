import styled from 'styled-components';

import DefaultButton from '~/components/Button';
import map from '~/assets/map.png';

export const Container = styled.div`
  position: relative;
  width: 100%;

  header {
    padding: 50px 80px 30px 80px;
    border-top: 1px solid #eaeaea;

    h2 {
      font-size: 25px;
      color: #333;
      font-weight: 500;
    }

    p {
      margin-top: 5px;
      font-size: 16px;
      color: #666;
    }
  }

  @media screen and (max-width: 768px) {
    header {
      padding: 30px 20px;
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

export const ButtonExplore = styled(DefaultButton).attrs(props => ({
  background: props.theme.immobileDetails.maps.button.backgroundColor,
  color: props.theme.immobileDetails.maps.button.color,
}))`
  position: absolute;
  width: 175px;
  bottom: 50px;
`;
