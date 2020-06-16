import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);
//const { id } = this.props.match.params;

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
      .get("https://mern-00.now.sh/api/books/" + this.props.match.params.id)
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
      const book = this.state.book;
      function createData( X, Y) {
        return { X, Y};
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
                    <TableHead>
                      {/* <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow> */}
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell align="right">{row.X}</TableCell>
                          <TableCell align="right">{row.Y}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      );
    };

    return <Body />;
  }
}

// let BookItem = <div>
// <table className="table table-hover table-dark">
//   {/* <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead> */}
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Title</td>
//       <td>{ book.title }</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Author</td>
//       <td>{ book.author }</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>ISBN</td>
//       <td>{ book.isbn }</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Publisher</td>
//       <td>{ book.publisher }</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Published Date</td>
//       <td>{ book.published_date }</td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Description</td>
//       <td>{ book.description }</td>
//     </tr>
//   </tbody>
// </table>
// </div>
// ........................
// <div className="ShowBookDetails">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-10 m-auto">
//                   <br /> <br />
//                   <Link to="/" className="btn btn-outline-warning float-left">
//                       Show Book List
//                   </Link>
//                 </div>
//                 <br />
//                 <div className="col-md-8 m-auto">
//                   <h1 className="display-4 text-center">Book's Record</h1>
//                   <p className="lead text-center">
//                       View Book's Info
//                   </p>
//                   <hr /> <br />
//                 </div>
//               </div>
//               <div>
//                 { BookItem }
//               </div>

//               <div className="row">
//                 <div className="col-md-6">
//                   <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete Book</button><br />
//                 </div>

//                 <div className="col-md-6">
//                   <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
//                         Edit Book
//                   </Link>
//                   <br />
//                 </div>

//               </div>
//                 {/* <br />
//                 <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
//                 <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

//             </div>
//           </div>
