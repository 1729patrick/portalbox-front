import styled, { css } from 'styled-components';

export const Container = styled.aside`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  user-select: none;
  padding-left: 50px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 25px;
  font-weight: 500;
  font-weight: 500;
  font-size: 14.5px;
  margin-right: 13px;
  border: solid 1px #c2c2c2;

  ${props =>
    props.selected
      ? css`
          background: rgb(239, 108, 0);
          border-color: rgb(239, 108, 0);
        `
      : css`
          background: transparent;
        `};

  &:hover {
    border-color: rgb(239, 108, 0);
  }

  > span {
    padding: 10px 12px;
    cursor: pointer;

    color: ${props => (props.selected ? '#fff' : '#666')};

    &:hover {
      color: ${props => !props.selected && 'rgb(239, 108, 0)'};
    }
  }
`;
