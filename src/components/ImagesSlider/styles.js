import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  user-select: none;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Preview = styled.aside`
  flex: 1;
  display: flex;
  align-items: center;
  padding-right: 30px;

  svg {
    cursor: pointer;
  }

  div {
    margin: 0 26px;
    background: ${props => props.source && `url(${props.source})`} center
      no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding-right: 0;

    div {
      margin: 0 5px;
    }
  }
`;

export const SliderWrapper = styled.div`
  width: 230px;
  padding: 50px 0;
  transition: 300ms;

  .slick-slide {
    padding: 4px;
    opacity: 0.6;

    &:hover {
      opacity: 1 !important;
    }
  }

  .slick-center {
    opacity: 1 !important;

    div div {
      border: solid 2px #444;

      div {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px 50px 0;
  }
`;

export const ImageIcon = styled.div`
  border-radius: 8px;
  height: 49px !important;
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  cursor: pointer;
  overflow: hidden;

  > div {
    height: 100%;
    background: ${props => props.source && `url(${props.source})`} center
      no-repeat;
    background-size: cover;
    transition: 300ms;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Description = styled.div`
  p {
    font-weight: 600;
    font-size: 16px;
    color: #555;
    margin-top: 20px;
  }

  h6 {
    margin-top: 20px;
    font-size: 17px;
    color: #555;
    font-weight: 500;
    user-select: text;
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;
