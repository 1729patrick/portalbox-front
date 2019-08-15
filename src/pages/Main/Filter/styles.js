import styled from 'styled-components';
import DefaultButton from '~/components/Button';

export const Container = styled.div`
  margin: 50px 0 0 80px;
  width: 430px;
  padding: 30px;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  h1 {
    color: #444;
    font-size: 30px;
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;

    label {
      text-transform: uppercase;
      margin-bottom: 7px;
      font-weight: bold;
      color: #555;
      font-size: 0.92em;
      margin-top: 17px;
    }

    .css-tlfecz-indicatorContainer {
      svg path {
        color: #888;
      }
    }
  }

  a {
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubmitButton = styled(DefaultButton).attrs({
  background: 'rgb(239, 108, 0)',
  color: '#fff',
})`
  margin-top: 15px;
  width: 130px;
  margin-left: auto;
`;
