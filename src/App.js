import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle, { Grid } from "./components/01-atoms/globalStyle";
import Header from "./components/03-organisms/header";

import HomePage from "./components/04-pages/HomePage";
import AppRoutes from "./components/_routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Grid>
          <GlobalStyle />
          <Header />
          <AppRoutes />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
