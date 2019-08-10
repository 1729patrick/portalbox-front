import styled from 'styled-components';

import DefaultButton from '~/components/Button';

import DefaultImages from '~/components/Images';

import map from '~/assets/maps.png';

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
      cursor: pointer;
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
      margin-right: 60px;

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
  padding: 50px 80px 70px 80px;
  /* background: #eee; */
  color: #444;

  h2 {
    font-weight: 500;
    font-size: 25px;
  }

  form {
    margin: 100px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 500;
        font-size: 15px;
      }

      input {
        margin-top: 7px;
        padding: 0 20px;
        width: 200px;
        height: 44px;
        border-radius: 25px;
        border: 0;
        background: #ddd;
        color: #333;
      }

      & + span {
        margin-left: 25px;
      }
    }
  }
`;

export const SimulationButton = styled(DefaultButton)`
  width: 200px;
  margin-top: auto;
  margin-left: 30px;
`;

export const Maps = styled.div`
  position: relative;
  width: 100%;

  header {
    padding: 50px 80px;
    border-top: 1px solid #eaeaea;

    h2 {
      font-size: 25px;
      color: #444;
      font-weight: 500;
    }

    p {
      margin-top: 5px;
      font-size: 16px;
      color: #666;
    }
  }
`;

export const MapsImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: url(${map}) center no-repeat;
    background-size: cover;
    height: 450px;
    width: 100%;
  }

  span {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
  }
`;

export const ButtonExplore = styled(Button)`
  position: absolute;
  width: 175px;
  bottom: 50px;
`;
