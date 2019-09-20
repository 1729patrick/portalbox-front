import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > span {
    flex: 1;
    display: flex;
    flex-direction: column;

    & + span {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
    }

    > div {
      margin: 0 -30px;
      padding: 4px 30px;

      &:hover {
        background: #f8f8f8;
      }
    }
  }
`;

export const Label = styled.label`
  font-size: 18px;
  color: rgb(239, 108, 0);
  margin-bottom: 18px;
  font-weight: 500;
`;
