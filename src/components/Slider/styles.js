import styled from 'styled-components';

export const Container = styled.div`
  .slick-prev {
    left: -14px !important;
    z-index: 1;
  }

  .slick-next {
    right: -13px !important;
  }

  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    display: none !important;
  }

  /* the slides */
  /* .slick-slide {
    margin: 0 6px;
    box-sizing: border-box;
  } */
  /* the parent */
  .slick-list {
    margin: 0 -6px !important;

    @media screen and (min-width: 1024px) {
      margin-right: -1px !important;
    }
  }
`;
