import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 25px;
  font-size: 14.5px;
  margin-right: 13px;
  border: solid 1px #cfcfcf;
  transition: 200ms;

  ${props =>
    props.selected
      ? css`
          background: rgb(239, 108, 0);
          border-color: rgb(239, 108, 0);
        `
      : css`
          background: transparent;

          &:hover {
            background: #eee;
            border-color: #eee;
          }
        `};

  > span {
    padding: 10px 14px;
    cursor: pointer;

    color: ${props => (props.selected ? '#fff' : '#444')};

    &:hover {
      color: ${props => !props.selected && '#444'};
    }
  }
`;
