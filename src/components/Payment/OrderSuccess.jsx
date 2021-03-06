import { Button, Container } from "@material-ui/core";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Payment.css";
import { clearCart } from "../../redux/action";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToOrderAction, addOrdersAction } from "../../redux/action";
const OrderSuccess = () => {
  const cartList = useSelector((state) => state.cart.recipesToBuy);
  //const orders = useSelector((state) => state.orders.ordersList);
  // let newOrders = Object.assign([], cartList);
  // console.log(newOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(addToOrderAction(cartList));
    dispatch(addOrdersAction(cartList));
    dispatch(clearCart());
  }, []);
  // console.log("orders", orders);
  return (
    <>
      <Container fluid className="container__part">
        <Row className="row__part">
          <div className="circle">
            <img
              src="right-mark-removebg.png"
              alt=""
              style={{ width: "220px" }}
            />
          </div>
          <h2 className="mt-3">Your order has been placed successfully</h2>
          <Link to={"/orders"}>
            <Button
              className="Button__part mt-4"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "150px",
                height: "50px",
              }}
            >
              View Orders
            </Button>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export default OrderSuccess;
