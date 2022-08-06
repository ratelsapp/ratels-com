import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter } from "react-router-dom";
import App from "./pages/app";
import Privacy from "./pages/privacy";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
      </Switch>
    </HashRouter>
  </StrictMode>,
  document.getElementById("app")
);
