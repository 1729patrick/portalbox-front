import styled from 'styled-components';

export const Mail = styled.div`
  display: flex;
  align-items: flex-end;

  > div {
    display: flex;

    flex: 1;

    & + div {
      margin-left: 15px;
      align-items: flex-end;
    }

    > div {
      flex: 1;

      & + div {
        margin-left: 15px;
      }
    }
  }

  & + div {
    margin-top: 15px !important;
  }

  button {
    margin-top: 0;
    margin-left: 15px;
    display: flex;
    height: 42px;
    margin-top: auto;

    p {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    border: 1px dashed #ccc;
    padding: 7px;
    border-radius: 4px;

    div + div {
      margin-left: 0;
      margin-top: 5px;

      display: block;

      > div {
        margin-left: 0;

        & + div {
          margin-top: 13px;

          div + div {
            margin-top: 0px;
          }
        }
      }
    }

    button {
      margin: 5px auto 0;

      p {
        display: block;
        color: #d50000;
        font-weight: 500;
      }

      svg {
        display: none;
      }
    }
  }
`;
