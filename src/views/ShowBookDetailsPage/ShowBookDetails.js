import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
//import SectionAboutUs from "./Sections/AboutUsSection.js";
//import SectionCreateBook from "./Sections/CreateBookSection";
import SectionShowBookDetails from "./Sections/ShowBookDetailsSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ShowBookDetailsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="KallathoniXY"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div
        className={classNames(
          classes.main
          //classes.mainRaised
        )}
      >
        <div className={classes.container}>
          <Router>
            <div>
              <Route path="/show-book/:id" component={SectionShowBookDetails} />
            </div>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}
