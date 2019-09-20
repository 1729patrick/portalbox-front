import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
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
    font-size: 14px !important;
    color: #d50000;
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
