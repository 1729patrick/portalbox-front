import styled from 'styled-components';

import wallpaper from '~/assets/ad_1_wallpaper.jpeg';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  color: ${props => (props.contranstLight ? '#fff' : '#444')};
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  position: relative;

  background: #eee url(${wallpaper}) center no-repeat;
  background-size: cover;
`;

export const Triangle = styled.div`
  border-style: solid;
  border-width: 0 0 calc(100vw / 2.3) calc(100vw / 2);
  border-color: transparent transparent transparent #eee;

  h1 {
    position: absolute;
    left: 30px;
    top: 30px;
    max-width: 40%;
  }
`;

export const Button = styled(DefaultButton)`
  width: 225px;
  position: absolute;
  left: 30px;
  bottom: 30px;
`;