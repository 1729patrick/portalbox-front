import styled from 'styled-components';

export const Container = styled.div`
  min-width: 260px;
  overflow: hidden;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  background: #fff;
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
`;

export const Image = styled.div`
  border-radius: 4px;
  height: 200px;
  background: ${props =>
    props.source && `url(${props.source}) center no-repeat`};
  background-size: cover;
`;

export const Details = styled.div`
  padding: 12px 10px;

  span {
    display: flex;
    align-items: center;
    > p {
      color: #999;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.3px;

      & + p {
        &::before {
          content: '·';
          color: #666;
          margin: 0 5px;
        }
      }
    }
  }

  h2 {
    margin-top: 5px;
    font-weight: 500;
    color: #333;
    font-size: 17px;
  }
`;
