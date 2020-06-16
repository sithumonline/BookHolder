import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { title } from "../../assets/jss/material-kit-react";
import image from "../../assets/img/span3.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "70px 0",
  },
  img: {
    position: "relative",
  },
  john: {
    width: "auto",
    height: "auto",
    maxWidth: 1080,
    boxShadow: "10px 10px 5px #ccc",
    //minWidth: 275,
    //marginRight: 10,
    //marginLeft: 10,
  },
  txt: {
    position: "relativ",
    zIndex: "2000",
    left: "20px",
    //color: "#e6ee9c",
  },
  flex: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    flexDirection: "row",
    padding: 0,
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
}));

export default function BookCard(props) {
  const classes = useStyles();
  const book = props.book;
  return (
    <div className={classes.root}>
      <Grid item xs={12} lg={12} className={classes.img}>
        <Link to={`/show-book/${book._id}`}>
          <Card className={classes.john}>
            <h2 className={classes.title}>{book.title}</h2>
            <CardActionArea className={classes.flex}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={image}
                title="Contemplative Reptile"
                style={{ maxHeight: 540, maxWidth: 540 }}
              />
              <CardContent>
                <Typography variant="h5" component="p" className={classes.txt}>
                  {book.description}
                </Typography>
                <br></br>
                <Typography gutterBottom variant="h6" component="h2">
                  <b>{book.author}</b>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </div>
  );
}
