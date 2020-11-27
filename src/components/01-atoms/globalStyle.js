/* seen on https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni */
import styled, { createGlobalStyle } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const GlobalStyle = createGlobalStyle`
html,
body {
  font-size: 8px;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}


* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`;
export default GlobalStyle;
