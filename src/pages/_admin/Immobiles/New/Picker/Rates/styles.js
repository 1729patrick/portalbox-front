import styled from 'styled-components';
import DefaultInputMask from '~/components/InputMask';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputMask = styled(DefaultInputMask)`
  margin-bottom: 10px;
`;
