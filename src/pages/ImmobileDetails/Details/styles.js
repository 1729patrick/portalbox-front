import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  > h2 {
    font-weight: 500;
    color: #444;
    font-size: 30px;
  }

  h3 {
    font-size: 16px;
    margin-top: 15px;
    font-weight: 500;
    color: #666;
    line-height: 22px;

    span {
      text-transform: uppercase;
      color: ${props => props.theme.immobileDetails.details.seeInMap.color};
      font-weight: 600;
      margin-left: 15px;
      font-size: 14px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    > h2 {
      font-size: 25px;
    }
  }
`;

export const Particulars = styled.div`
  margin-top: 50px;

  h2 {
    font-weight: 500;
    color: #444;
    font-size: 25px;
  }

  ul {
    margin-top: 30px;
    display: flex;

    li {
      display: flex;
      align-items: center;
      width: 25%;

      img {
        height: 30px;
      }

      p {
        margin-left: 10px;
        font-weight: 500;
        color: #444;
      }
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;

    p {
      width: 25%;
      display: flex;
      align-items: center;
      height: 40px;
      font-weight: 500;
      color: #444;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;

    div {
      margin-top: 0;
      justify-content: space-between;

      p {
        width: 50%;
        margin-top: 0;
      }
    }
    ul {
      flex-wrap: wrap;

      li {
        width: 50% !important;
        margin-bottom: 15px;
      }
    }
  }
`;
