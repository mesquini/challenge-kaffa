import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routers";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </>
);

export default App;
