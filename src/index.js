import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import MainPage from "views/MainPage/MainPage.js";
import CreateBookPage from "views/CreateBookPage/CreateBookPage.js";
import ShowBookDetailsPage from "views/ShowBookDetailsPage/ShowBookDetails.js";

var hist = createBrowserHistory();

const muiTheme = createMuiTheme({
  palette: {
    type: "light" //"dark",
  },
});

ReactDOM.render(
  <Router history={hist}>
    <MuiThemeProvider theme={muiTheme}>
      <Switch>
        <Route path="/show-book/" component={ShowBookDetailsPage} />
        <Route path="/create-book" component={CreateBookPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
