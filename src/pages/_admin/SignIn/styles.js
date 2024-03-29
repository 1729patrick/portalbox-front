import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  background: linear-gradient(130deg, rgb(239, 108, 0) 0, #78378c 100%);
  align-items: center;
  justify-content: center;

  /* repetido */
  div {
    position: absolute;
    top: 40px;

    display: flex;
    align-items: center;

    h1 {
      color: #fff;
      margin-right: 2px;
      font-size: 30px;
      margin-top: 8px;
    }

    @media screen and (min-width: 768px) {
      left: 60px;
    }
  }

  form {
    z-index: 1;
    background: #fff;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1) !important;
    display: flex;
    flex-direction: column;
    min-width: 300px;

    label {
      font-weight: 500;
      margin-bottom: 3px;
      color: #333;
    }

    input {
      height: 44px;
      border-radius: 4px;
      background: #eee;
      border: 0;
      padding: 0 13px;
      margin-bottom: 15px;
    }
  }
`;

export const SubmitButton = styled(Button).attrs({
  color: '#fff',
  background: 'rgb(239, 108, 0)',
})`
  margin-top: 15px;
  width: 100%;
`;
