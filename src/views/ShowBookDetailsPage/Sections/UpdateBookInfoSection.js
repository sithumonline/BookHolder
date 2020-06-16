//import 'date-fns';
import React, { Component } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
//import InputAdornment from "@material-ui/core/InputAdornment";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import People from "@material-ui/icons/People";
//import Email from "@material-ui/icons/Email";
// core components
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Button from "../../../components/CustomButtons/Button.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from "@material-ui/core/TextField";

//import DateFnsUtils from "@date-io/date-fns";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);


export default class SectionUpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("https://mern-01.now.sh/api/books/" + this.props.match.params.id)
      .then((res) => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        console.log("Error from UpdateBookInfo");
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
    };

    axios
      .put(
        "https://mern-01.now.sh/api/books/" + this.props.match.params.id,
        data
      )
      .then((res) => {
        this.props.history.push("/show-book/" + this.props.match.params.id);
      })
      .catch((err) => {
        console.log("Error in UpdateBookInfo!");
      });
  };

  render() {
    const Body = () => {
        const classes = useStyles();
        const { register, handleSubmit } = useForm();
        return (
          <div className={classes.section}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <form
                      className={classes.form}
                      noValidate
                      //onSubmit={handleSubmit((data) => this.onSubmit(data))}
                      onSubmit={this.onSubmit}
                    >
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>Add Book</h4>
                      </CardHeader>
                      <p className={classes.divider}>Create new book</p>
                      <CardBody>
                        <TextField
                          labelText="Title of the Book"
                          id="title"
                          name="title"
                          label="title"
                          variant="outlined"
                          inputRef={register}
                          value={this.state.title}
                          onChange={this.onChange}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                          }}
                        />
                        <TextField
                          labelText="ISBN"
                          id="isbn"
                          name="isbn"
                          label="isbn"
                          variant="outlined"
                          inputRef={register}
                          value={this.state.isbn}
                          onChange={this.onChange}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                          }}
                        />
                        <TextField
                          labelText="Author"
                          id="author"
                          name="author"
                          label="author"
                          variant="outlined"
                          inputRef={register}
                          value={this.state.author}
                          onChange={this.onChange}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                          }}
                        />
                        <TextField
                          labelText="Describe this book"
                          id="description"
                          name="description"
                          variant="outlined"
                          label="description"
                          inputRef={register}
                          value={this.state.description}
                          onChange={this.onChange}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                          }}
                        />
                        <TextField
                          labelText="date."
                          id="published_date"
                          name="published_date"
                          variant="outlined"
                          label="published_date"
                          inputRef={register}
                          value={this.state.published_date}
                          onChange={this.onChange}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                          }}
                        /> 
                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="published_date"
                            name="published_date"
                            label="Picker published"
                            inputRef={register}
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider> */}
                        <TextField
                          labelText="Publisher of this Book"
                          id="publisher"
                          name="publisher"
                          variant="outlined"
                          label="publisher"
                          inputRef={register}
                          value={this.state.publisher}
                          onChange={this.onChange}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button simple color="primary" size="lg" type="submit">
                          Submit
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        );
    };
    return <Body />;
  }
}
