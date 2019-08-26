import styled from 'styled-components';
import Button from '~/components/Button';

export const Container = styled.section`
  position: fixed;
  background: #fff;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  overflow-y: auto;
`;

export const DragAndDrop1 = styled.section`
  display: flex;
  flex-direction: column;

  header {
    background: #fff;
    padding: 20px calc(60px + 0.5%) 20px;
    position: fixed;
    width: 100%;
    z-index: 3;

    section {
      display: flex;
      margin-bottom: 15px;

      h1 {
        font-size: 25px;
      }

      svg {
        margin-left: auto;
        cursor: pointer;
      }
    }

    > span {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 15px;

      h2 {
        color: #555;
        white-space: nowrap;
      }

      button {
        margin-left: auto;
      }
    }
  }
`;

export const SaveButton = styled(Button).attrs({
  background: 'rgb(239, 108, 0)',
  color: '#fff',
})``;

export const Images = styled.section`
  background: #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  border-radius: 6px;
  padding: 0 8px 0 4px p {
    height: 100%;
    font-weight: 500;
    color: #333 !important;
    font-size: 14px !important;
    text-align: center;
  }

  &:hover {
    p {
      color: rgb(239, 108, 0) !important;
    }
  }
`;

export const ImageSmall = styled.div`
  flex: 1;
  cursor: pointer;
  margin: 8px 4px;
  min-width: 20%;
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  background: #fff;
  overflow: hidden;
  border-radius: 6px;

  > div {
    background: ${props =>
      props.source && `url(${props.source}) center no-repeat`};
    background-size: cover;
    height: 120px;
    border-bottom: 1px solid #eee;
  }

  h3 {
    padding: 10px;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
  }
`;

export const Dropzone = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;
  border-width: 2px;
  border-radius: 2px;
  border-color: #ccc;
  border-style: dashed;
  background-color: #eee;
  color: #555;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;

  > p {
    font-weight: 500;
    font-size: 15px;
  }

  &:hover {
    color: rgb(239, 108, 0);
  }

  &:focus {
    border-color: rgb(239, 108, 0);
  }
`;
