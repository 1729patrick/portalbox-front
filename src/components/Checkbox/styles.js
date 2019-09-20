import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .MuiCheckbox-root {
    margin-left: -10px;
  }

  label + label {
    margin-top: 5px;
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
