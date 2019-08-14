import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 30px 50px 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 3;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 10px;

  span {
    button {
      font-size: 15px;
      font-weight: 500;
      background: none;
      border: none;
      padding: 5px;
      border-bottom: solid 2px transparent;
      color: #444;

      & + button {
        margin-left: 26px;
      }

      &:hover {
        border-color: #444;
      }
    }
  }

  svg {
    cursor: pointer;
  }
`;
