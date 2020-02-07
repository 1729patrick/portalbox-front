import styled from 'styled-components';

import IncreaseDecreaseDefault from '~/components/IncreaseDecrease';

export const Content = styled.div`
  margin-top: 15px;
  overflow-y: auto;
  max-height: 25em;

  > label {
    margin-top: 10px;
    color: #333;
  }

  .MuiFormControlLabel-root {
    margin: 0;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    > span {
      margin: 0;
    }
  }
`;

export const IncreaseDecrease = styled(IncreaseDecreaseDefault)`
  margin-top: 10px;
`;
