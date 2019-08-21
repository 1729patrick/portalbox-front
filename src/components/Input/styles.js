import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #444;
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

export const DefaultInput = styled.input`
  height: 37px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 12px 6px;
`;
