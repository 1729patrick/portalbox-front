import styled from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
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

export const Button = styled(DefaultButton).attrs({
  color: '#fff',
  background: 'rgb(239, 108, 0)',
})`
  width: 200px;
  margin-top: auto;
  margin-left: 30px;
`;
