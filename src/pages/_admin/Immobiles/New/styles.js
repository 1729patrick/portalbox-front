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
    margin-bottom: 30px;

    h1 {
      font-size: 25px;
      margin-bottom: 4px;
      display: flex;
      align-items: baseline;

      > p {
        color: #666;
        font-weight: 500;
        margin-left: 4px;
        font-size: 14px;
      }
    }

    > p {
      color: #777;
      font-weight: 500;
      margin-left: 4px;
      font-size: 13px;
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

export const Images = styled.div`
  margin-top: 20px;
  height: 90px;
  background: #eee;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  transition: 300ms;

  p {
    font-weight: 500;
    color: #444 !important;
    font-size: 15px;
  }

  &:hover {
    p {
      color: rgb(239, 108, 0) !important;
    }
  }
`;

export const Img = styled.img`
  height: 90px;
  margin-right: 15px;
`;
