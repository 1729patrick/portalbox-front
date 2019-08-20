import styled from 'styled-components';
import DefaultButton from '~/components/Button';

export const Container = styled.div`
  height: 100%;
  display: flex;
  user-select: none;
  padding: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  right: 0;
  background: #fff;

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

  input {
    margin-top: 7px;
    height: 37px;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 12px 6px;
  }
`;

export const SaveButton = styled(DefaultButton).attrs({
  background: 'rgb(239, 108, 0)',
  color: '#fff',
})`
  width: 100%;
  margin-top: 50px;
`;
