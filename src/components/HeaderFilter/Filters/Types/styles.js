import styled from 'styled-components';
import CheckboxDefault from '~/components/Checkbox';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Checkbox = styled(CheckboxDefault)`
  & + div {
    margin-top: 10px;
  }
`;
