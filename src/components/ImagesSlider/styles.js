import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 80px 40px;
  user-select: none;
  background: #fff;

  > svg {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`;
export const Preview = styled.aside`
  flex: 1;
  display: flex;
  align-items: center;
  padding-right: 40px;

  div {
    margin: 0 60px;
    background: ${props => props.source && `url(${props.source})`} center
      no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  }

  svg {
    cursor: pointer;
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
        transform: scale(1.15);
      }
    }
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
      transform: scale(1.15);
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
`;
