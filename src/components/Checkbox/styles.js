import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    margin-top: 5px;
  }
  .MuiCheckbox-root {
    margin-left: -10px;
  }

  .MuiIconButton-label {
    input:checked + .MuiSvgIcon-root {
      color: ${props => props.theme.checkbox.checkedColor};
    }
  }
  .MuiSvgIcon-root {
    /* margin-left: -10px; */
    color: ${props => props.theme.checkbox.color};
  }
`;
