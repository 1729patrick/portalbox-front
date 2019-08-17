import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 25px;
  font-size: 14.5px;
  margin-right: 13px;
  border: ${props =>
    `solid 1px ${props.theme.headerFilter.option.borderColor}`};
  transition: 200ms;
  white-space: nowrap;

  ${props =>
    props.selected
      ? css`
          background: ${props.theme.headerFilter.option.selected
            .backgroundColor};
          border-color: ${props.theme.headerFilter.option.selected
            .backgroundColor};
        `
      : css`
          background: transparent;

          &:hover {
            background: ${props.theme.headerFilter.option.borderColor};
          }
        `};

  > span {
    padding: 10px 14px;
    cursor: pointer;

    color: ${props =>
      props.selected
        ? props.theme.headerFilter.option.selected.color
        : props.theme.headerFilter.option.color};

    &:hover {
      color: ${props =>
        !props.selected && props.theme.headerFilter.option.selected.color};
    }
  }
`;
