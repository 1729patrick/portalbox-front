import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: rgb(239, 108, 0);
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;
    transition: 300ms;

    &:hover {
      border-color: rgb(239, 108, 0);
    }
  }
`;

export const City = styled.div`
  background: #eee;
  padding: 15px;
  border-radius: 4px;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: 500;
      font-size: 17px;
      margin-bottom: 15px;
      color: #555;
    }

    > button {
      transition: 300ms;
      font-weight: 500;
      color: rgb(239, 108, 0);
      padding-bottom: 3px;
      border-bottom: 2px solid transparent;

      &:hover {
        border-color: rgb(239, 108, 0);
      }
    }
  }

  > button {
    width: min-content;
    font-weight: 500;
    color: rgb(239, 108, 0);
    cursor: pointer;
    display: flex;
    border: none;
    margin-top: 25px;
    white-space: nowrap;
    font-size: 15px;
    padding-bottom: 3px;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: rgb(239, 108, 0);
    }
  }

  div div input {
    background: #fff;
    border: none;
  }
`;

export const Neighborhoods = styled.div`
  label {
    display: block;
    font-weight: 500;
    color: #333;
    font-size: 15px;
    margin-bottom: 3px;
  }

  div {
    display: flex;
    flex: 1;

    & + div {
      margin-top: 10px;
    }

    button {
      display: flex;
      margin-left: 15px;
    }
  }
`;
