import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  border-radius: 5px;
  box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
  overflow: hidden;
  cursor: pointer;
  margin: 8px;

  h3 {
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
  }
`;

export const Image = styled.div`
  background: ${props =>
    props.source && `url(${props.source}) center no-repeat`};
  background-size: cover;
  height: 120px;
`;
