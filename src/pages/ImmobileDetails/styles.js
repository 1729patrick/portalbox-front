import styled from 'styled-components';

import DefaultButton from '~/components/Button';

import DefaultImages from '~/components/Images';

export const Container = styled.section``;

export const Images = styled(DefaultImages)``;

export const Infos = styled.div`
  padding: 30px 80px;
  display: flex;
  height: 100%;
`;

export const Details = styled.div`
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

    span {
      text-transform: uppercase;
      color: rgb(239, 108, 0);
      font-weight: 600;
      margin-left: 15px;
      font-size: 14px;
    }
  }
`;

export const Value = styled.aside`
  padding: 0 40px;
  background: #fff;
  width: 350px;
  border-radius: 6px;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.16);
  text-align: center;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 25px;
    color: #555;
    position: relative;
    margin-top: 35px;
  }

  ul {
    margin-top: 15px;

    li {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;

      & + li {
        border-top: 1px solid #eee;
      }
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
    flex: 1;

    li {
      display: flex;
      align-items: center;
      margin-right: 40px;

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
    margin-top: 30px;

    p {
      width: 33%;
      display: flex;
      align-items: center;
      height: 40px;
      font-weight: 500;
      color: #444;
    }
  }
`;

export const Button = styled(DefaultButton)`
  margin-top: auto;
  width: 100%;
  margin: 25px 0;
`;

export const Highlighter = styled.div`
  position: absolute;
  font-size: 14px;
  background: rgb(239, 108, 0);
  padding: 7px 10px;
  border-radius: 25px;
  color: #fff;
  left: -55px;
  top: -13px;
  font-weight: 500;
  text-align: center;
`;

export const Simulation = styled.div`
  background: #fff;
  height: 500px;

  h2 {
    font-weight: 500;
    color: #444;
    font-size: 25px;
  }
`;
