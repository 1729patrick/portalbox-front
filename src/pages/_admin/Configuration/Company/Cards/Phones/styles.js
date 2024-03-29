import styled from 'styled-components';
import Card from '~/components/_admin/Card';

export const CardPhones = styled(Card)`
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

export const Phone = styled.span`
  display: flex;
  align-items: flex-end;

  > div {
    flex: 1;

    & + div {
      margin-left: 15px;
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
