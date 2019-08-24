import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    margin-top: 10px;
    color: #333;
  }

  .MuiFormControlLabel-root {
    margin: 0;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    > span {
      margin: 0;
    }
  }
`;
