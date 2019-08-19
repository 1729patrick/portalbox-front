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

  h1 {
    font-size: 25px;
    margin-bottom: 4px;
  }

  span {
    color: #666;
    font-size: 14px;
    font-weight: 500;
  }

  > p {
    text-align: right;
    font-weight: 500;
    color: rgb(239, 108, 0);
    cursor: pointer;
  }

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
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

export const SelectImagesButton = styled(DefaultButton).attrs({
  background: '#e5e5e5',
  color: '#444',
})`
  display: flex;
  justify-content: center;
  margin: 20px 0 0 auto;
  width: 200px;
  font-size: 15px;
`;

export const Images = styled.div`
  margin-top: 20px;
  height: 90px;
  background: #eee;
  border-radius: 4px;
  width: 800px;
`;

export const Img = styled.div`
  height: 90px;
  border: 1px solid black;
  margin-right: 15px;
`;
