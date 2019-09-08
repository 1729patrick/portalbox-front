import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  padding: 24px 24px 61px;

  > label {
    display: block;
    margin-bottom: 12px;
    color: #202124;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
    font-weight: 500;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  bottom: 18px;
  left: 24px;
  padding-bottom: 3px;
  background: 0;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: 300ms;
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: #888;
  }
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 18px;
  right: 24px;
  padding-bottom: 3px;
  background: 0;
  border: none;
  font-size: 14px;
  font-weight: 500;
  transition: 300ms;
  border-bottom: 2px solid transparent;

  color: ${props => props.theme.headerFilter.popup.saveButton.color};

  &:hover {
    border-color: ${props => props.theme.headerFilter.popup.saveButton.color};
  }
`;
