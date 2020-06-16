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
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from "@material-ui/core/TextField";

//import DateFnsUtils from "@date-io/date-fns";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);


// const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };


export default class SectionLogin extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.state = {
      title: "",
      isbn: "",
      author: "",
      description: "",
      published_date: "",
      publisher: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  hello = () => {
    const _title = this.title.current.value;
    console.log("title : ", _title);
  };

  onSubmit = (data) => {
    //e.preventDefault();

    const dataSet = {
      title: data.title,
      isbn: data.isbn,
      author: data.author,
      description: data.description,
      published_date: data.published_date,
      publisher: data.publisher,
    };
    console.log(data);
    console.log("dataSet :: ", dataSet);
    axios
      .post("https://mern-01.now.sh/api/books", dataSet)
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
                    onSubmit={handleSubmit((data) => this.onSubmit(data))}
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
                        //value={this.state.title}
                        //onChange={this.onChange}
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
                        //value={this.state.isbn}
                        //onChange={this.onChange}
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
                        //value={this.state.author}
                        //onChange={this.onChange}
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
                        //value={this.state.description}
                        //onChange={this.onChange}
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
                        //value={this.state.published_date}
                        //onChange={this.onChange}
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
                        //value={this.state.publisher}
                        //onChange={this.onChange}
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
    }; //

    return <Body />;
  } //
}

// export default function SectionLogin() {
//   const classes = useStyles();
//   return (
//     <div className={classes.section}>
//       <div className={classes.container}>
//         <GridContainer justify="center">
//           <GridItem xs={12} sm={12} md={4}>
//             <Card>
//               <form className={classes.form}>
//                 <CardHeader color="primary" className={classes.cardHeader}>
//                   <h4>Add Book</h4>
//                   <div className={classes.socialLine}>
//                     <Button
//                       justIcon
//                       href="#pablo"
//                       target="_blank"
//                       color="transparent"
//                       onClick={e => e.preventDefault()}
//                     >
//                       <i className={classes.socialIcons + " fab fa-twitter"} />
//                     </Button>
//                     <Button
//                       justIcon
//                       href="#pablo"
//                       target="_blank"
//                       color="transparent"
//                       onClick={e => e.preventDefault()}
//                     >
//                       <i className={classes.socialIcons + " fab fa-facebook"} />
//                     </Button>
//                     <Button
//                       justIcon
//                       href="#pablo"
//                       target="_blank"
//                       color="transparent"
//                       onClick={e => e.preventDefault()}
//                     >
//                       <i
//                         className={
//                           classes.socialIcons + " fab fa-google-plus-g"
//                         }
//                       />
//                     </Button>
//                   </div>
//                 </CardHeader>
//                 <p className={classes.divider}>Create new book</p>
//                 <CardBody>
//                   <TextField
//                     labelText="Title of the Book"
//                     name="title"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text",
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <People className={classes.inputIconsColor} />
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                   <TextField
//                     labelText="ISBN"
//                     name="isbn"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text",
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <People className={classes.inputIconsColor} />
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                   <TextField
//                     labelText="Author"
//                     name="author"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text",
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <People className={classes.inputIconsColor} />
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                   <TextField
//                     labelText="Describe this book"
//                     name="description"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text",
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <People className={classes.inputIconsColor} />
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                   <TextField
//                     labelText="date."
//                     name="published_date"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text",
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <People className={classes.inputIconsColor} />
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                   <TextField
//                     labelText="Publisher of this Book"
//                     name="publisher"
//                     formControlProps={{
//                       fullWidth: true
//                     }}
//                     inputProps={{
//                       type: "text",
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <People className={classes.inputIconsColor} />
//                         </InputAdornment>
//                       )
//                     }}
//                   />
//                 </CardBody>
//                 <CardFooter className={classes.cardFooter}>
//                   <Button simple color="primary" size="lg">
//                     Get started
//                   </Button>
//                 </CardFooter>
//               </form>
//             </Card>
//           </GridItem>
//         </GridContainer>
//       </div>
//     </div>
//   );
// }
