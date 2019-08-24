import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 24px 18px;

  > label {
    display: block;
    margin-bottom: 12px;
    color: #202124;
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
    font-weight: 500;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  > button {
    padding-bottom: 3px;
    background: 0;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: 300ms;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: #888;
    }

    & + button {
      color: ${props => props.theme.headerFilter.popup.saveButton.color};

      &:hover {
        border-color: ${props =>
          props.theme.headerFilter.popup.saveButton.color};
      }
    }
  }
`;
