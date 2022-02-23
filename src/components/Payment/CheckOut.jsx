import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Image } from "react-bootstrap";
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
  const [tip, setTip] = useState(null);
  console.log(totalPay);
  const dispatch = useDispatch();

  const classes = useStyles();
  let surcharge = 2.1;
  let delivery_fee = 1.8;
  /*   let totalPay = cartList.reduce(
    (acc, currentValue) => acc + parseFloat(currentValue.price),
    0
  ); */
  let toal_payment = Math.round(
    delivery_fee + totalPay + surcharge + tip
  ).toFixed(2);

  const emptyCart = () => {
    localStorage.removeItem("cartItems");
  };

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
      <Container fluid className=" mt-5">
        <Row>
          <Col md={8} sm={12}>
            <h3>Shipping info</h3>
            <div>
              <h5>Name:</h5>
              <h5>Phone:</h5>
              <h5>Address:</h5>
            </div>
            <div>
              <h4>Your cart items:</h4>
              <div className="d-flex mt-5 shadow-2xl bg-white rounded-lg">
                <Image
                  className="mr-5"
                  style={{ width: "15rem" }}
                  src="me-discord.jpg"
                ></Image>
                <div>
                  <h3 className="card-title">name</h3>
                  <p>
                    <b className="text-success">In stock</b>
                  </p>

                  <hr></hr>
                  <div className="d-flex">
                    <h5>Price:</h5>
                    <h4 className="pricedetail ml-2 text-danger"> € 10</h4>
                  </div>
                </div>
              </div>
              <div class="flex p-6 font-mono">
                <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
                  <img
                    src="/retro-shoe.jpg"
                    alt=""
                    class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <form class="flex-auto pl-6">
                  <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                    <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
                      Retro Shoe
                    </h1>
                    <div class="relative text-lg text-white">$89.00</div>
                    <div class="relative uppercase text-teal-400 ml-3">
                      In stock
                    </div>
                  </div>
                  <div class="flex items-baseline my-6">
                    <div class="space-x-3 flex text-sm font-medium">
                      <label>
                        <input
                          class="sr-only peer"
                          name="size"
                          type="radio"
                          value="xs"
                          checked
                        />
                        <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                          XS
                        </div>
                      </label>
                      <label>
                        <input
                          class="sr-only peer"
                          name="size"
                          type="radio"
                          value="s"
                        />
                        <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                          S
                        </div>
                      </label>
                      <label>
                        <input
                          class="sr-only peer"
                          name="size"
                          type="radio"
                          value="m"
                        />
                        <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                          M
                        </div>
                      </label>
                      <label>
                        <input
                          class="sr-only peer"
                          name="size"
                          type="radio"
                          value="l"
                        />
                        <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                          L
                        </div>
                      </label>
                      <label>
                        <input
                          class="sr-only peer"
                          name="size"
                          type="radio"
                          value="xl"
                        />
                        <div class="relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                          XL
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="flex space-x-2 mb-4 text-sm font-medium">
                    <div class="flex space-x-4">
                      <button
                        class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black"
                        type="submit"
                      >
                        Buy now
                      </button>
                      <button
                        class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900"
                        type="button"
                      >
                        Add to bag
                      </button>
                    </div>
                    <button
                      class="flex-none flex items-center justify-center w-12 h-12 text-black"
                      type="button"
                      aria-label="Like"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="text-xs leading-6 text-slate-500">
                    Free shipping on all continental US orders.
                  </p>
                </form>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
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
                      className="mr-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(5);
                      }}
                    >
                      € 5
                    </Button>
                    <Button
                      sm={12}
                      className="mx-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(10);
                      }}
                    >
                      € 10
                    </Button>
                    <Button
                      sm={12}
                      className="mx-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(15);
                      }}
                    >
                      € 15
                    </Button>
                    <Button
                      sm={12}
                      className="mx-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(20);
                      }}
                    >
                      € 20
                    </Button>
                    <Button
                      sm={12}
                      className="ml-1"
                      variant="contained"
                      style={{ width: "15%" }}
                      onClick={() => {
                        setTip(25);
                      }}
                    >
                      € 25
                    </Button>

                    <div className="mt-2" style={{ color: "green" }}>
                      <strong> Our riders recive 100% of your tip</strong>
                    </div>
                  </div>
                </div>
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="h6"
                className="mt-5"
              >
                Order summary
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <div sm={12} className="card" style={{ width: "100%" }}>
                  <ul className="list-group list-group-flush ">
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
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h2"
                >
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
                  name="Shipping Details"
                  products={cartList}
                  Payment={toal_payment * 100}
                  billingAddress
                  shippingAddress
                  onClick={() => emptyCart()}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
