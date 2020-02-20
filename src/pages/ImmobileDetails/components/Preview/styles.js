import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 30px 50px 50px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 3;

  @media screen and (max-width: 768px) {
    padding: 0 0 30px 0;

    header {
      padding: 15px 20px 10px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 25px;
  padding-bottom: 10px;

  svg {
    cursor: pointer;
    margin-left: auto;
  }
`;

export const Button = styled.button`
  font-size: 14.5px;
  font-weight: 500;
  background: none;
  border: none;
  padding: 3px;
  border-bottom: solid 2px transparent;
  color: #333;

  & + button {
    margin-left: 25px;
  }

  &:hover {
    border-color: #333;
  }

  border-color: ${props => props.selected && '#333'};
`;
