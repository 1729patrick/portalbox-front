import styled, { css } from 'styled-components';

import DefaultButton from '~/components/Button';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${props =>
    props.imagesLength === 1
      ? css`
          grid-template-areas:
            'img-0 img-0 img-0'
            'img-0 img-0 img-0';
        `
      : props.imagesLength === 2
      ? css`
          grid-template-areas:
            'img-0 img-1 img-1'
            'img-0 img-1 img-1';
        `
      : props.imagesLength === 3
      ? css`
          grid-template-areas:
            'img-0 img-1 img-1'
            'img-0 img-2 img-2';
        `
      : css`
          grid-template-areas:
            'img-0 img-1 img-3'
            'img-0 img-2 img-2';
        `}
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
        transform: scale(1.06);
      }
    }
  }

  @media screen and (max-width: 768px) {
    ${props =>
      props.imagesLength === 2
        ? css`
            grid-template-areas:
              'img-0 img-0 img-0'
              'img-1 img-1 img-1';
          `
        : props.imagesLength === 1
        ? css`
            grid-template-areas:
              'img-0 img-0 img-0'
              'img-0 img-0 img-0';
          `
        : css`
            grid-template-areas:
              'img-0 img-2 img-2'
              'img-1 img-2 img-2';
          `}

    button {
      right: 15px;
    }
  }
`;

export const Img = styled.div`
 grid-area: ${props => props.gridArea};
    div {
      background: url('${props => props.source}')
        center no-repeat;
      background-size: cover;
    }
    `;

export const Button = styled(DefaultButton).attrs(props => ({
  background: props.theme.immobileDetails.images.button.backgroundColor,
  color: props.theme.immobileDetails.images.button.color,
}))`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 125px;
`;
