import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
`;

export const Image = styled.div`
  border-radius: 4px;
  height: 200px;
  background: ${props =>
    props.source && `url(${props.source}) center no-repeat`};
  background-size: cover;
`;

export const Details = styled.div`
  padding: 12px 0;

  span {
    display: flex;
    align-items: center;

    > p {
      color: #909090;
      font-weight: 600;
      font-size: 12.4px;
      text-transform: uppercase;
      letter-spacing: 0.3px;

      & + p {
        &::before {
          content: '·';
          color: #606060;
          margin: 0 5px;
        }
      }
    }
  }

  h2 {
    margin: 8px 0;
    font-weight: 500;
    color: #333;
    font-size: 16px;
  }

  > div {
    display: flex;

    div {
      span {
        font-weight: 400;
        font-size: 14px;
        color: #666;
      }

      p {
        font-size: 15px;
        color: ${props => props.theme.cards.immobile.price.color};
        font-weight: 500;
        white-space: nowrap;
      }

      & + div {
        margin-left: 20px;
      }
    }
  }
`;
