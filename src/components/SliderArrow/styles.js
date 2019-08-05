import styled from 'styled-components';

export const Arrow = styled.button`
  background: #fff !important;
  height: 30px !important;
  width: 30px !important;
  border-radius: 50%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-shadow: 0 0 8px 0 rgba(17, 22, 26, 0.16),
    0 4px 8px 0 rgba(17, 22, 26, 0.08), 0 8px 16px 0 rgba(17, 22, 26, 0.08);

  ::before {
    content: '' !important;
  }
`;
