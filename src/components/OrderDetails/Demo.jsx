import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import StepperPart from "./StepperPart";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";

import "./Demo.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
    boxShadow: "2px 2px 10px 0px rgb(190, 108, 170)",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function Demo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className="ml-5 pl-5 mt-5 mb-4 ">
        <Typography gutterBottom variant="h4">
          Your Orders
        </Typography>
      </Grid>
      <Paper className={`card__shadow ${classes.paper}`} elevation={3}>
        <Card className={classes.root}>
          <CardHeader
            action={<IconButton aria-label="settings">€19.00</IconButton>}
            title="Shrimp and Chorizo Paella"
            subheader="Ordered At : March 2, 2022"
          />
        </Card>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="/shetru-kitchen.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="row"
              spacing={3}
              className="d-flex"
            >
              <Grid item xs>
                <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
                  Product: Pasta
                </Typography>
              </Grid>

              <Grid item xs>
                <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
                  Quantity: 2
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">€19.00</Typography>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">$19.00</Typography>
          </Grid>
          */}
        </Grid>
        <StepperPart />
        <Grid container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid
                item
                xs
                container
                direction="row"
                spacing={3}
                className="d-flex"
              ></Grid>
              <Grid item>
                <Link to={"/cancel"}>
                  <Typography variant="link">Cancel Order</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
