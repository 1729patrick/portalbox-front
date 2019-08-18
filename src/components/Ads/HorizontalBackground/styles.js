import styled from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  border-radius: 6px;
  height: 350px;
  overflow: hidden;

  h1 {
    color: ${props => props.theme.ads.horizontalBackground.title.color};
    font-size: 2em;
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100% - 54px);
  margin-top: 20px;
`;

export const Image = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 6px;
  background: ${props =>
    props.source && `url(${props.source}) center no-repeat`};
  background-size: cover;
  flex: 1;
  height: 100%;
  box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1);

  & + div {
    margin-left: 10px;
  }
`;

export const Button = styled(DefaultButton).attrs(props => ({
  color: props.theme.ads.horizontalBackground.button.color,
  background: props.theme.ads.horizontalBackground.button.backgroundColor,
}))`
  margin-bottom: 30px;
  width: 150px;
`;
