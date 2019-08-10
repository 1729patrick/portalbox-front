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
  color: ${props => (props.contranstLight ? '#fff' : 'rgb(239, 108, 0)')};
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  user-select: none;
  overflow: hidden;

  background: #eee url(${wallpaper}) center no-repeat;
  background-size: cover;

  h1 {
    max-width: 40%;
  }
`;

export const Button = styled(DefaultButton).attrs(props => ({
  background: props.contranstLight ? '#fff' : 'rgb(239, 108, 0)',
  color: props.contranstLight ? '#444' : '#fff',
}))`
  width: 150px;
`;
