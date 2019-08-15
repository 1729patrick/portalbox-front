import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  padding: 10px;

  background: url('https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg')
    center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  span {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: auto;
    display: none;
  }
`;

export const Content = styled.div`
  padding: 50px 80px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
