import styled from 'styled-components';

export const Content = styled.div`
  padding: 15px;

  .popup-content {
    background: blue !important;
  }

  .input-range__slider {
    background: ${props =>
      props.theme.headerFilter.price.range.backgroundColor};
    border-color: ${props =>
      props.theme.headerFilter.price.range.backgroundColor};
  }

  .input-range__track--active {
    background: ${props =>
      props.theme.headerFilter.price.range.backgroundColor};
  }

  .input-range__label {
    top: -20px;
    color: #555;
    display: none;
  }

  .input-range__label--value {
    display: none;
  }
`;

export const Values = styled.div`
  margin: 20px -10px 0 -10px;
  display: flex;
  justify-content: space-between;

  input {
    height: 40px;
    border: none;
    background: #eee;
    border-radius: 50px;
    width: 49%;
    font-size: 14px;

    padding: 0 13px;
  }
`;
