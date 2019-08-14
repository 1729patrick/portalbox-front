import styled from 'styled-components';

import DefaultButton from '~/components/Button';

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
  position: relative;

  div {
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
    overflow: hidden;

    > div {
      height: 100%;
      transition: 300ms;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .img1 {
    grid-area: img1;

    div {
      background: url('https://permuti.com/wp-content/uploads/2017/09/Mod01-05-1170x586.jpg')
        center no-repeat;
      background-size: cover;
    }
  }

  .img2 {
    grid-area: img2;

    div {
      background: url('https://permuti.com/wp-content/uploads/2017/09/Mod01-05-1170x586.jpg')
        center no-repeat;
      background-size: cover;
    }
  }

  .img3 {
    grid-area: img3;

    div {
      background: url('https://permuti.com/wp-content/uploads/2017/09/Mod01-05-1170x586.jpg')
        bottom no-repeat;
      background-size: cover;
    }
  }

  .img4 {
    grid-area: img4;
    div {
      background: url('https://permuti.com/wp-content/uploads/2017/09/Mod01-05-1170x586.jpg')
        center no-repeat;
      background-size: cover;
    }
  }
`;

export const Button = styled(DefaultButton).attrs({
  background: '#fff',
  color: '#444',
})`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 125px;
`;
