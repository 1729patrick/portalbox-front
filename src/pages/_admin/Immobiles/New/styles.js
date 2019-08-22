import styled from 'styled-components';
import DefaultButton from '~/components/Button';

export const Container = styled.div`
  height: 100%;
`;

export const Card = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1);
  padding: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  > div {
    & + div {
      margin-top: 25px;
    }

    h1 {
      font-size: 25px;
      margin-bottom: 4px;
      display: flex;
      align-items: baseline;

      > p {
        color: #888;
        margin-left: 4px;
        font-weight: 400;
        font-size: 14px;
      }
    }

    > p {
      color: #555;
      font-size: 14px;
      line-height: 20px;
    }
  }

  > button {
    width: min-content;
    font-weight: 500;
    color: rgb(239, 108, 0);
    cursor: pointer;
    display: flex;
    border: none;
    margin-left: auto;
    margin-top: 25px;
    white-space: nowrap;
  }

  & + div {
    margin-top: 30px;
  }
`;

export const SubmitButton = styled(DefaultButton).attrs({
  background: 'rgb(239, 108, 0)',
  color: '#fff',
})`
  display: flex;
  justify-content: center;
  margin: 20px 0 20px auto;
  width: 150px;
`;
