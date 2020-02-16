import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  div + div {
    margin-top: 20px;
  }

  > button {
    width: min-content;
    font-weight: 500;
    color: rgb(239, 108, 0);
    cursor: pointer;
    display: flex;
    border: none;
    margin-top: 20px;
    white-space: nowrap;
    font-size: 15px;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: rgb(239, 108, 0);
    }
  }
`;

export const Neighborhoods = styled.div`
  > span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      display: block;
      font-weight: 500;
      color: #333;
      font-size: 15px;
      margin-bottom: 3px;
    }

    p {
      color: #d50000;
      font-size: 14px;
      font-weight: 500;
    }
  }
  div {
    display: flex;
    flex: 1;

    & + div {
      margin-top: 10px;
    }

    button {
      display: flex;
      margin: auto 0 6px 15px;
    }
  }
`;
