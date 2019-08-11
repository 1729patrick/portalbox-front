import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'img1 img2 img4'
    'img1 img3 img3';
  grid-gap: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;

  div {
    border-radius: 8px;
  }

  .img1 {
    grid-area: img1;

    background: url('https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg')
      center no-repeat;
    background-size: cover;
  }

  .img2 {
    grid-area: img2;
    background: url('https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg')
      center no-repeat;
    background-size: cover;
  }

  .img3 {
    grid-area: img3;
    background: url('https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg')
      bottom no-repeat;
    background-size: cover;
  }
  .img4 {
    grid-area: img4;
    background: url('https://privilegeimobiliaria.com.br/wp-content/uploads/2018/11/zzzzz.jpg')
      center no-repeat;
    background-size: cover;
  }
`;
