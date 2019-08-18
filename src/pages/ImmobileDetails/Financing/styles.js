import styled from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  padding: 50px 80px 70px 80px;
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

  @media screen and (max-width: 768px) {
    padding: 30px 20px;

    form {
      flex-direction: column;
      padding: 0 30px;

      span {
        margin-left: 0 !important;
        width: 100%;

        input {
          width: 100%;
        }

        & + span {
          margin-top: 20px;
        }
      }

      button {
        margin-top: 60px;
        margin-left: 0;
        width: 100%;
      }
    }
  }
`;

export const Button = styled(DefaultButton).attrs(props => ({
  color: props.theme.immobileDetails.financing.button.color,
  background: props.theme.immobileDetails.financing.button.backgroundColor,
}))`
  width: 200px;
  margin-top: auto;
  margin-left: 30px;
`;
