import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Link from "@material-ui/core/Link";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import BookIcon from "@material-ui/icons/Book";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

const useStylesX = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "34ch",
    },
  },
  button: {
    margin: theme.spacing(1),
    float: "right!important",
  },
}));

export default function SectionCreateBook() {
  const [form, setValue] = useState({
    title: "",
    isbn: "",
    author: "",
    description: "",
    published_date: "",
    publisher: "",
  });

  //   constructor() {
  //     super();
  //     //this.title = React.createRef();
  //     this.state = {
  //       title: "",
  //       isbn: "",
  //       author: "",
  //       description: "",
  //       published_date: "",
  //       publisher: "",
  //     };
  //   }

  const updateField = (e) => {
    setValue({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   onChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   hello = () => {
  //     const _title = this.title.current.value;
  //     console.log("title : ", _title);
  //   };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: form.title,
      isbn: form.isbn,
      author: form.author,
      description: form.description,
      published_date: form.published_date,
      publisher: form.publisher,
    };
    console.log(data);
    console.log("dataSet :: ", data);
    axios
      .post("https://mern-01.now.sh/api/books", data)
      .then((res) => {
        this.setState({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        //console,console.log(err);
        console.log("Error in CreateBook!");
      });
  };
  //render() {
  // const Body = () => {
  const classes = useStyles();
  const classesX = useStylesX();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classesX.root}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Add Book</h4>
              </CardHeader>
              <p className={classes.divider}>Create new book</p>
              <CardBody>
                <TextField
                  id="title"
                  name="title"
                  label="title"
                  variant="outlined"
                  //value={this.state.title}
                  value={form.title}
                  //onChange={this.onChange}
                  onChange={updateField}
                />
                <TextField
                  id="isbn"
                  name="isbn"
                  label="isbn"
                  variant="outlined"
                  //value={this.state.isbn}
                  value={form.isbn}
                  //onChange={this.onChange}
                  onChange={updateField}
                />
                <TextField
                  id="author"
                  name="author"
                  label="author"
                  variant="outlined"
                  //value={this.state.author}
                  value={form.author}
                  //onChange={this.onChange}
                  onChange={updateField}
                />
                <TextField
                  id="description"
                  name="description"
                  variant="outlined"
                  label="description"
                  //value={this.state.description}
                  value={form.description}
                  //onChange={this.onChange}
                  onChange={updateField}
                />
                <TextField
                  id="published_date"
                  name="published_date"
                  variant="outlined"
                  label="published_date"
                  //value={this.state.published_date}
                  value={form.published_date}
                  //onChange={this.onChange}
                  onChange={updateField}
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
                  id="publisher"
                  name="publisher"
                  variant="outlined"
                  label="publisher"
                  //value={this.state.publisher}
                  value={form.publisher}
                  //onChange={this.onChange}
                  onChange={updateField}
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button
                  //onClick={this.onSubmit}
                  onClick={onSubmit}
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className={classesX.button}
                startIcon={<BookIcon />}
              >
                Show BooK List
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
  // }; //

  // return <Body />;
  //} //
}
