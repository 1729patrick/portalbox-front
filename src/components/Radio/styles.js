import styled from 'styled-components';

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: -10px -18px;
  padding: 10px 9px;
  overflow-y: hidden;
  overflow-x: auto;

  .MuiIconButton-label {
    input {
      z-index: 0;
    }
  }
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
