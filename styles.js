import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
  --background-color: #F0FFF0;
  --button-color: #f2d052;
  --background-card-color: #f2d052;
  --button-color-second: #3a3405;
  --text-button-color: #ffffff;;
}
  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--background-color);
    font-size: 1rem;
 
  }
`;
