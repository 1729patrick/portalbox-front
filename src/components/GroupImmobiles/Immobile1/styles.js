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
    justify-content: space-between;
    align-items: center;

    h4 {
      color: #777;
      text-transform: uppercase;
      font-size: 13px;
    }

      > p {
        color: ${props => props.theme.cards.immobile.price.color};
        font-weight: 500;
        font-size: 15px;
      }
    }
  }

  > p {
    color: #666;
    margin-bottom: 5px;
  }

  ul {
    margin: 7px 0;
    padding: 7px 0;
    display: flex;
    color: #333;
    justify-content: space-between;
    /* border-top: 1px solid #eee; */

    li {
      p {
        font-size: 14px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-content: center;
        font-weight: 600;
        display: flex;

        span {
          font-size: 14px;
          font-weight: 400;
          margin-left: 5px;
          color: #444;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-size: 17px;
      white-space: nowrap;

      span {
        font-size: 13px;
      }
    }
  }
`;
