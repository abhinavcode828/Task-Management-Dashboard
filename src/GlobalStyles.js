import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: #f5f5f5;
    color: #333;
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    opacity: 0.9;
  }
`;

export default GlobalStyles;
