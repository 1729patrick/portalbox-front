import { createGlobalStyle } from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-input-range/lib/css/index.css';

import theme from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Product+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100%;
    background: #f4f7fb;
  }

body {
  -webkit-font-smoothing: antialiased;
}

  body, input, button, textarea {
    font: 14px 'Product Sans', 'Roboto', sans-serif;
  }

  input::placeholder {
    font: 14px 'Product Sans', 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .slick-prev {
    left: -17px !important;
    z-index: 1;
  }

  .slick-next {
    right: -10px !important;
  }


  .slick-prev.slick-disabled, .slick-next.slick-disabled {
    display: none !important;
  }

  .popup-content  {
    border: none !important;
    border-radius: 6px;
    min-width: 300px;
    overflow: hidden;
    box-shadow: 0 0 30px 6px rgba(31,51,73,.1) !important;
    padding: 0 !important;
  }

  .popup-overlay  {
    background: #eee;
    opacity: 0.8;
    top: 125px !important;
    cursor: auto;
  }


 .MuiFormControlLabel-label {
      font-size: 14.5px !important;
      font-family: 'Product Sans', 'Roboto', sans-serif !important;
      font-weight: 500 !important;

    }

    .MuiFormControlLabel-root {
      height: 35px;
      margin-right: 0 !important;
      color: ${theme.checkbox.color};

      &:hover {
        color: ${theme.checkbox.checkedColor};
      }
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
`;
