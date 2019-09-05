import styled from 'styled-components';

import RadioDefaul from '~/components/Radio';
import InputDefault from '~/components/Input';
import SwitchDefault from '~/components/Switch';

export const Container = styled.div`
  width: 100%;

  > span {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .MuiFormControlLabel-root {
    display: flex;
    justify-content: space-between;
  }
`;

export const Label = styled.div`
  font-size: 20px;
  color: #222;
  margin-bottom: 14px;
`;

export const Switch = styled(SwitchDefault)`
  /* margin-bottom: 10px !important; */
`;

export const Radio = styled(RadioDefaul)`
  background: blue;
`;

export const Input = styled(InputDefault)`
  margin-bottom: 10px;
`;
