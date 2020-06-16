import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);
//const { id } = this.props.match.params;

const useStylesX = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    float: "center!important",
  },
}));

export default class SectionShowBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get("https://mern-01.now.sh/api/books/" + this.props.match.params.id)
      .then((res) => {
        console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }

  onDeleteClick(id) {
    axios
      .delete("https://mern-01.now.sh/api/books/" + id)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick");
      });
  }
  render() {
    const Body = () => {
      const classes = useStyles();
      const classesX = useStylesX();
      const book = this.state.book;
      function createData(X, Y) {
        return { X, Y };
      }

      const rows = [
        createData("Title", book.title),
        createData("Author", book.author),
        createData("ISBN", book.isbn),
        createData("Publisher", book.publisher),
        createData("Published Date", book.published_date),
        createData("Description", book.description),
      ];
      return (
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="left">{row.X}</TableCell>
                          <TableCell align="right">{row.Y}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </GridItem>
              <GridItem>
                <Link to={`/edit-book/${book._id}`}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<EditIcon />}
                    className={classesX.button}
                  >
                    Edit Book
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<DeleteForeverIcon />}
                  className={classesX.button}
                  onClick={this.onDeleteClick.bind(this, book._id)}
                >
                  Delete Book
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      );
    };

    return <Body />;
  }
}
