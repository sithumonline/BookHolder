import React from "react";
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
import SectionCreateBook from "./Sections/CreateBookSection"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function CreateBookPage(props) {
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
          <SectionCreateBook />
        </div>
      </div>
      <Footer />
    </div>
  );
}
