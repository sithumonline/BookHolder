import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SectionShowBookList from "./Sections/ShowBookListSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function MainPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Book Holder"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/imagebackg.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>We Keep Your Book.</h1>
              <h4>
                “Sometimes, you read a book and it fills you with this weird
                evangelical zeal, and you become convinced that the shattered
                world will never be put back together unless and until all
                living humans read the book.” ― <i>John Green, The Fault in Our
                Stars</i>
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div
        className={classNames(
          classes.main
          //classes.mainRaised -- for boder
        )}
      >
        <div className={classes.container}>
          <SectionShowBookList />
        </div>
      </div>
      <Footer />
    </div>
  );
}
