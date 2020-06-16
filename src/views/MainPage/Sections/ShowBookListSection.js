import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import axios from "axios";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import BookCard from "../../../components/Card/BookCard";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);
const useStylesX = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    float: "right!important",
  },
}));

export default class SectionShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://mern-01.now.sh/api/books")
      .then((res) => {
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }

  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let bookList;

    if (!books) {
      bookList = "there is no book recored!";
    } else {
      bookList = books.map((book, k) => <BookCard book={book} key={k} />);
    }

    const Body = () => {
      const classesX = useStylesX();
      const classes = useStyles();
      return (
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem>
                <Link href="/create-book">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    className={classesX.button}
                    startIcon={<SaveIcon />}
                  >
                    Add New Book
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Books List</h2>
                <div className="list">{bookList}</div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      );
    };

    return <Body />;
  }
}
