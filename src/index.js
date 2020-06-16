import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import MainPage from "views/MainPage/MainPage.js";
import CreateBookPage from "views/CreateBookPage/CreateBookPage.js";
import ShowBookDetailsPage from "views/ShowBookDetailsPage/ShowBookDetails.js";
// import UpdateBookInfo from "./components/UpdateBookInfo";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/show-book/" component={ShowBookDetailsPage} />
      <Route path="/create-book" component={CreateBookPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
