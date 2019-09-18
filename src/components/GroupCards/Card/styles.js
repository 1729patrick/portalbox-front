import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  margin: 0 6px;
  background: #fff;

  /* box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2); */
  border: 1px solid #ddd;
  /* border: 1px solid #162962; */

  h3 {
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Image = styled.div`
  background: ${props =>
    props.source && `url(${props.source}) center no-repeat`};
  background-size: cover;
  height: 120px;
`;
