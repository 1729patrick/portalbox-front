import styled from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.section`
  align-items: stretch;
  margin: 0 auto;
  background: #fff;
  padding: 75px 0 0 0 !important;

  > div {
    display: flex;
    padding: 0 80px 40px;

    > div {
      flex: 1;
      padding: 0 30px;
    }
  }

  form {
    > div {
      margin-bottom: 15px;

      input,
      textarea {
        background: #f1f3f4;
        border: none;
        font-weight: 500;

        &::placeholder {
          color: #666;
          font-weight: 500;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #444;
  padding: 40px 110px 30px;
`;

export const Info = styled.div`
    span {
      display: block;
      font-size: 14px;
      line-height: 24px;
      text-align: justify;
      color: #333;
      font-weight: 500;
      margin-bottom: 7px;
      padding-bottom: 7px;

      button {
        border: none;
        background: transparent;
        font-weight: 600;
      }

      svg {
        margin-right: 23px;
      }
    }

    div {
      p {
        color: #162962;
        font-weight: 500;
        line-height: 24px;
        font-size: 14.5px;
        cursor: pointer;
      }
    }
  }
`;

export const SubmitButton = styled(Button).attrs({
  background: '#162962',
  color: '#fff',
})`
  margin-left: auto;
  margin-top: 20px;
`;

export const Header = styled.div`
  height: 300px;
  padding: 0 !important;
  /* background: linear-gradient(130deg, #3c91e7 0, #162962 100%); */
  background: ${props => `url("${props.banner}") center no-repeat`};
  background-size: cover;

  width: 100%;

  box-shadow: 0 0 30px 6px rgba(31, 51, 73, 0.1);

  div {
    background: rgba(0, 0, 0, 0.5);
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #fff;
      font-size: 40px;
    }
  }
`;
