import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  margin: 12px;
  background: #fff;

  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);

  &:first-child {
    margin-left: 0;
  }

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
