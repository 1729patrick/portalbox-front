import styled from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  border-radius: 6px;
  height: 350px;
  overflow: hidden;

  h1 {
    color: #444;
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
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);

  & + div {
    margin-left: 10px;
  }
`;

export const Button = styled(DefaultButton).attrs({
  color: '#222',
  background: '#fff',
})`
  margin-bottom: 30px;
  width: 150px;
`;
