import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Product+Sans:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #444;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100%;
  }

body {
  -webkit-font-smoothing: antialiased;
}

  body, input, button {
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
    left: -6px !important;
    z-index: 1;
  }

  .slick-next {
    right: -10px !important;
  }


  .slick-prev.slick-disabled, .slick-next.slick-disabled {
    display: none !important;
  }
`;
