import { createGlobalStyle } from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import fontMedium from '~/assets/fonts/GoogleSans-Medium.ttf';
import fontRegular from '~/assets/fonts/GoogleSans-Regular.ttf';

// import theme from './theme';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  /* @import url('https://fonts.gstatic.com/s/productsans/v10/pxiDypQkot1TnFhsFMOfGShVF9eOYktMqg.woff2'); */

@font-face {
    font-family: 'Google Sans';
    src: url(${fontMedium});
    font-weight: 500;
  }

  @font-face {
    font-family: 'Google Sans';
    src: url(${fontRegular}) ;
    font-weight: 400;
  }

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

  @media screen and (max-width: 768px) {
    user-select: none;
  }
}

  body, input, button, textarea {
    font: 14px "Google Sans",Roboto,Arial,Helvetica,sans-serif;
    line-height: 1.71429;
    font-style: normal;
    font-weight: 300;
    line-height: 1.444;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }

  input::placeholder {
    font: 14px "Google Sans",Roboto,Arial,Helvetica,sans-serif;
    line-height: 1.71429;
    font-style: normal;
    font-weight: 300;
    line-height: 1.444;
    overflow-wrap: break-word;
    word-wrap: break-word;
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



  .popup-content  {
    border: none !important;
    border-radius: 6px;
    min-width: 300px;
    overflow: hidden;
    box-shadow: 0 0 30px 6px rgba(31,51,73,.1) !important;
    padding: 0 !important;
  }

  .popup-overlay  {
    background: #000;
    opacity: 0.2;
    top: 125px !important;
    cursor: auto;
  }


 .MuiFormControlLabel-label {
      font-size: 15px !important;
      font-family: "Google Sans",Roboto,Arial,Helvetica,sans-serif !important;
      font-weight: 500 !important;
    }

    .MuiFormControlLabel-root {
      height: 30px;
      margin-right: 0 !important;
      color:  ${props => props.theme.checkbox.color};

      &:hover {
        color: ${props => props.theme.checkbox.checkedColor};
      }
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .MuiFormControlLabel-root {
      margin: 0;
      display: flex;
      margin-left: 0 !important;

      > span {
        margin: 0;
      }
  }


  @media screen and (max-width: 768px) {
    .popup-overlay  {
      top: 115px !important;
    }
   }

`;
