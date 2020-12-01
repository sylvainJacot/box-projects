import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./components/01-atoms/globalStyle";
import Header from "./components/03-organisms/header";

import AppRoutes from "./components/_routes/routes";

function App() {
  return (
    <AppContainer>
      <Router>
        <GlobalStyle />
        <Header />
        <AppRoutes />
      </Router>
    </AppContainer>
  );
}

export default App;

export const AppContainer = styled.div`

`;
