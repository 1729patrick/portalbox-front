import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;

  > span {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    > button {
      padding-bottom: 3px;
      background: 0;
      border: none;
      font-size: 14px;
      font-weight: 500;

      &:hover {
        padding-bottom: 1.7px;
        border-bottom: solid 1.3px #444;
      }

      & + button {
        color: rgb(239, 108, 0);

        &:hover {
        padding-bottom: 1.7px;
        border-bottom: solid 1.3px rgb(239, 108, 0);
      }
    }
  }
`;
