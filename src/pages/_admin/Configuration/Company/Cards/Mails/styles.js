import styled from 'styled-components';
import Card from '~/components/_admin/Card';

export const CardMails = styled(Card)`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span {
      color: #d50000;
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

export const Mail = styled.span`
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

  & + span {
    margin-top: 15px !important;
  }

  button {
    margin-top: 0;
    margin-left: 15px;
    display: flex;
    height: 42px;
    margin-top: auto;

    span {
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

      span {
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
