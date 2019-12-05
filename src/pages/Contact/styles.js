import styled from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.section`
  padding: 75px 0 0 0 !important;

  > div {
    display: flex;
    padding: 0 80px 40px;

    > div {
      flex: 1;
      padding: 0 30px;
      text-align: center;

      form {
        > div {
          margin-bottom: 15px;

          input,
          textarea {
            background: #e1e3e4;
            border: none;
            font-weight: 500;

            &::placeholder {
              color: #444;
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    > div {
      flex-direction: column-reverse;
      padding: 0 30px 20px;

      > div {
        padding: 0;

        > h1 {
          font-size: 32px;
        }
      }
    }

    > h1 {
      padding: 30px 30px 10px;
      font-size: 23px;
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
  margin-top: 18px;

  div {
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

      svg {
        margin-right: 23px;
      }
    }
  }

  div p {
    align-items: center;
    display: flex;
    color: #333;
    font-weight: 500;
    line-height: 24px;
    font-size: 14.5px;
    cursor: pointer;

    > svg {
      margin-right: 5px;
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
