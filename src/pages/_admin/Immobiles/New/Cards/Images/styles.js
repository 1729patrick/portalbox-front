import styled from 'styled-components';
import { Card } from '../../styles';

export const CardImages = styled(Card)`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: #d50000;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;
