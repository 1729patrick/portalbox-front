import styled from 'styled-components';

import wallpaper from '~/assets/ad_wallpaper.jpeg';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border-radius: 6px;
  padding: 50px;
  color: ${props =>
    props.contranstLight
      ? props.theme.ads.imageBackground.title.color
      : props.theme.ads.imageBackground.title.colorDark};
  box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1);
  user-select: none;
  overflow: hidden;

  background: #eee url(${wallpaper}) center no-repeat;
  background-size: cover;

  h1 {
    max-width: 40%;
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
    background-position: right;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      max-width: 100%;
    }
  }
`;

export const Button = styled(DefaultButton).attrs(props => ({
  background: props.contranstLight
    ? props.theme.ads.imageBackground.button.backgroundColor
    : props.theme.ads.imageBackground.button.backgroundColorDark,
  color: props.contranstLight
    ? props.theme.ads.imageBackground.button.color
    : props.theme.ads.imageBackground.button.colorDark,
}))`
  width: 175px;
`;
