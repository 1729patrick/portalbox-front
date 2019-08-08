import styled from 'styled-components';
// import background from '~/assets/0ffd8594.jpg';
// import background from '~/assets/5d23419e2b0ad.jpg';
import background from '~/assets/5aec94358cdfb.jpg';

import Button from '~/components/Button';

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  padding: 10px;
  /* background: black url(${background}) center no-repeat; */
  background: black url('https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const Filter = styled.div`
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
    font-size: 31px;
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
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const Content = styled.div`
  padding: 30px 80px;
`;
