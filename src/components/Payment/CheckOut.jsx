import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    /*   "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    }, */
  },
  media: {
    height: 140,
  },
}));
/* const handleToken = (token, addresses, cartList, totalPay) => {
  console.log(token, addresses, cartList, totalPay);
}; */

export default function Checkout() {
  let totalPay = useSelector((state) => state.total.payment);
  const cartList = useSelector((state) => state.cart.recipesToBuy);

  const dispatch = useDispatch();

  const classes = useStyles();
  let surcharge = 2.1;
  let delivery_fee = 1.8;
  /*   let totalPay = cartList.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue.price),
    0
  ); */
  let toal_payment = Math.round(delivery_fee + totalPay + surcharge).toFixed(2);

  const handleToken = async (token) => {
    const response = await axios.post(
      /*  "https://qb36s.sse.codesandbox.io/" */ "https://localhost:8080/checkout",
      {
        token,
        toal_payment,
        cartList,
        /* product: { name: "test prd" }, */
      }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  return (
    <>
      <Container className=" mt-5">
        <div>
          <TextField
            sm={12}
            id="filled-secondary"
            label="Any additional delivery note?"
            variant="filled"
            color="primary"
            style={{ width: "100%" }}
          />
          <div className="mt-5">
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                Add a tip
              </Typography>
              <div className="my-2">
                <Button
                  sm={12}
                  className="mr-3"
                  variant="contained"
                  style={{ width: "15%" }}
                >
                  € 10
                </Button>
                <Button
                  sm={12}
                  className="mx-3"
                  variant="contained"
                  style={{ width: "15%" }}
                >
                  € 10
                </Button>
                <Button
                  sm={12}
                  className="mx-3"
                  variant="contained"
                  style={{ width: "15%" }}
                >
                  € 10
                </Button>
                <Button
                  sm={12}
                  className="mx-3"
                  variant="contained"
                  style={{ width: "15%" }}
                >
                  € 10
                </Button>
                <Button
                  sm={12}
                  className="ml-3"
                  variant="contained"
                  style={{ width: "15%" }}
                >
                  € 10
                </Button>
                <div className="mt-2" style={{ color: "green" }}>
                  <strong> Our riders recive 100% of your tip</strong>
                </div>
              </div>
            </div>
          </div>
          <Typography gutterBottom variant="h5" component="h3" className="mt-5">
            Order summary
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <div sm={12} className="card" style={{ width: "100%" }}>
              <ul className="list-group list-group-flush " disableSpacing>
                <li sm={12} className="list-group-item d-flex">
                  <small>SUBTOTAL </small>
                  <small className="ml-auto">{totalPay} EUR</small>
                </li>
                <li sm={12} className="list-group-item d-flex">
                  <small> DELIVERY FEE</small>
                  <small className="ml-auto">{delivery_fee} EUR</small>
                </li>

                <li sm={12} className="list-group-item d-flex">
                  <small>SURCHARGE FOR ORDERS UNDER 15.00 EUR</small>
                  <small className="ml-auto">{surcharge} EUR</small>
                </li>
                <li sm={12} className="list-group-item d-flex">
                  <small>
                    <strong>TOTAL</strong>
                  </small>
                  <small className="ml-auto">{toal_payment} EUR</small>
                </li>
              </ul>
            </div>
          </Typography>
          <div sm={12} className="justify-content-center">
            <Typography variant="body2" color="textSecondary" component="h2">
              ADD COUPON
            </Typography>
            {/*   <Link to="/payment-page">
              <Button variant="contained" size="large" color="primary">
                Place order
                <ArrowForwardIcon className="ml-2" />
              </Button>
            </Link> */}
            <StripeCheckout
              stripeKey="pk_test_51KSjz0EcIioZXTXKo4xyhU5Y1HoNIOVXBRKjy5fxcZ7TFEyQ7eCCwp7SeS2rMJQNmYnUYQfP6ZsFZzZXCQt8P9Bd00plTWBxMc"
              token={handleToken}
              name="Recipes Check Out"
              products={cartList}
              Payment={toal_payment * 100}
              billingAddress
              shippingAddress
            />
          </div>
        </div>
      </Container>
    </>
  );
}
