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
    color: #333;
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
    margin: 0;
    width: 100%;
    margin: auto;
  }
`;

export const SubmitButton = styled(DefaultButton).attrs(props => ({
  background: props.theme.main.filter.button.backgroundColor,
  color: props.theme.main.filter.button.color,
}))`
  margin-top: 15px;
  width: 130px;
  margin-left: auto;
`;
