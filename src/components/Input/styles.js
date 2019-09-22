import styled from 'styled-components';

export const DefaultInput = styled.input`
  height: 37px;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 12px 6px;
  font-weight: 500;
  transition: 300ms;

  &:focus {
    border-color: #bbb;
  }
`;

export const TextArea = styled.textarea`
  height: 74px;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 12px 6px;
  font-weight: 500;
`;
