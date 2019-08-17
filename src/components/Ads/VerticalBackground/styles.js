import styled from 'styled-components';

import wallpaper from '~/assets/ad_1_wallpaper.jpeg';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border-radius: 6px;
  overflow: hidden;
  color: ${props => props.theme.ads.verticalBackground.title.color};
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  position: relative;
  user-select: none;

  background: #eee url(${wallpaper}) center no-repeat;
  background-size: cover;
`;

export const Triangle = styled.div`
  border-style: solid;
  border-width: 0 0 calc(100vw / 2.3) calc(100vw / 2);
  border-color: ${props =>
    `transparent transparent transparent ${props.theme.ads.verticalBackground.backgroundColor}`};

  h1 {
    position: absolute;
    left: 30px;
    top: 30px;
    max-width: 40%;
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      max-width: 100%;
    }

    button {
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Button = styled(DefaultButton).attrs(props => ({
  background: props.theme.ads.verticalBackground.button.backgroundColor,
  color: props.theme.ads.verticalBackground.button.color,
}))`
  width: 225px;
  position: absolute;
  left: 30px;
  bottom: 30px;
`;
