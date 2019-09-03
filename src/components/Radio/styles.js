import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: -9px;

  input {
    display: none;
  }

  .MuiFormControlLabel-root {
    &:hover {
      color: rgb(239, 108, 0);

      span {
        color: rgb(239, 108, 0);
      }
    }

    & + .MuiFormControlLabel-root {
      margin-left: 13px;
    }
  }
`;

export const Label = styled.div`
  margin-left: 9px;
  font-weight: 500;
  font-size: 15px;
  color: #333;
  margin-bottom: 3px;
  justify-content: space-between;
  display: flex;

  label span {
    color: #777;
    font-weight: 500;
    margin-left: 4px;
    font-size: 13px;
  }

  > span {
    color: #d50000;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Clear = styled.p`
  margin-left: 20px;
  cursor: pointer;
  opacity: 0.6;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    opacity: 1;
  }
`;
