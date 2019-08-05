import styled from 'styled-components';

export const Container = styled.div`
  min-width: 290px;
  overflow: hidden;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  /* box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2); */
`;

export const Image = styled.div`
  border-radius: 4px;
  height: 200px;
  background: ${props =>
    props.source && `url(${props.source}) center no-repeat`};
  background-size: cover;
`;

export const Details = styled.div`
  padding: 10px;

  span {
    display: flex;
    justify-content: space-between;

    h4 {
      color: #777;
      text-transform: uppercase;
      font-size: 12.5px;
    }
  }

  > p {
    margin-top: 4px;
  }

  ul {
    margin-top: 11px;
    display: flex;

    li {
      flex: 1;
      align-items: center;
      justify-content: center;
      align-items: center;
      text-align: center;

      img {
        height: 22px;
      }

      p {
        margin-top: 5px;
        font-size: 13px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-content: center;
      }
    }
  }
`;
