import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StepperPart from "./StepperPart";
import { Link } from "react-router-dom";
import "./Demo.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/action";

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

export default function OrderDetails() {
  const cartList = useSelector((state) => state.cart.recipesToBuy);
  const dispatch = useDispatch();

  let total = cartList.reduce(
    (acc, currentValue) =>
      acc + parseFloat(currentValue.price) * currentValue.qty,
    0
  );
  const classes = useStyles();

  return (
    <>
      <div className="" style={{ height: "100%" }}>
        <Grid className="ml-5 pl-5 mt-5 mb-4 ">
          <Typography gutterBottom variant="h4">
            Your Orders
          </Typography>
        </Grid>
        {cartList.map((recipe, i) => (
          <div
            className="row mb-4"
            style={{ width: "88%", marginLeft: "75px" }}
          >
            <div className="col">
              <div className="card card-2">
                <div className="card-body">
                  <div className="media">
                    <div className="sq align-self-center ">
                      <img
                        className="img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                        src={recipe.img}
                        width="135"
                        height="135"
                      />
                    </div>
                    <div className="media-body my-auto text-right">
                      <div className="row my-auto flex-column flex-md-row">
                        <div className="col-auto my-auto ">
                          <h6 className="mb-0"> {recipe.name}</h6>
                        </div>
                        <div className="col my-auto ">
                          <small>Ordered At : March 2, 2022 </small>
                        </div>

                        <div className="col my-auto ">
                          <small>Qty : 1</small>
                        </div>
                        <div className="col my-auto ">
                          <h6 className="mb-0"> €{recipe.price}</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <StepperPart />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/*   <div className="row mt-4">
          <div className="col">
            <div className="row justify-content-between">
              <div className="col-auto">
                <p className="mb-1 text-dark">
                  <b>Order Details</b>
                </p>
              </div>
              <div className="flex-sm-col text-right col">
                <p className="mb-1">
                  <b>Total</b>
                </p>
              </div>
              <div className="flex-sm-col col-auto">
                <p className="mb-1">€ {total}</p>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="flex-sm-col text-right col">
                <p className="mb-1">
                  {" "}
                  <b>Discount</b>
                </p>
              </div>
              <div className="flex-sm-col col-auto">
                <p className="mb-1">&#8377;150</p>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="flex-sm-col text-right col">
                <p className="mb-1">
                  <b>GST 18%</b>
                </p>
              </div>
              <div className="flex-sm-col col-auto">
                <p className="mb-1">843</p>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="flex-sm-col text-right col">
                <p className="mb-1">
                  <b>Delivery Charges</b>
                </p>
              </div>
              <div className="flex-sm-col col-auto">
                <p className="mb-1">Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row invoice ">
          <div className="col">
            <p className="mb-1"> Invoice Number : 788152</p>
            <p className="mb-1">Invoice Date : 22 Dec,2019</p>
            <p className="mb-1">Recepits Voucher:18KU-62IIK</p>
          </div>
        </div> */}
      </div>
    </>
  );
}
