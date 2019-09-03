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
      color: #666;
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
    color: #555;
    margin: 7px 0;
  }

  ul {
    margin-top: 8px;
    padding-top: 8px;
    display: flex;
    color: #333;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;

      img {
        height: 22px;
      }

      p {
        margin-top: 8px;
        font-size: 14px;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-content: center;
        font-weight: 500;
        display: flex;

        span {
          font-size: 14px;
          font-weight: 400;
          margin-left: 2px;
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
