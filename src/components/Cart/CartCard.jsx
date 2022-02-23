import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { removeFromCartAction } from "../../redux/action";
//import "../../components/Home/Home.css";
import "./Cart.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";
import { loadCSS } from "fg-loadcss";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import "../../components/Home/Home.css";
import clsx from "clsx";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { adjustItemQty } from "../../redux/action";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  card__deco: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const CartCard = ({ breakfast, i }) => {
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.cart.recipesToBuy[i].qty);
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <>
      <div className="cartItem" md={12}>
        <img className="cartItem__image" src={breakfast.img} />
        <div className="cartItem__details">
          <p className="details__title">{breakfast.name}</p>
          <p className="details__desc">{`Cooking time: ${breakfast.cookingTime} min`}</p>
          <p className="details__price">$ {breakfast.price}</p>
        </div>
        <div className="cartItem__actions">
          <div className="cartItem__qty">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={qty}
              onChange={(e) => {
                //setInput(e.target.value);
                dispatch(adjustItemQty(i, e.target.value));
              }}
            />
          </div>

          <button
            variant="contained"
            color="secondary"
            size="small"
            className={`actions__deleteItemBtn ml-5`}
            onClick={() => {
              dispatch(removeFromCartAction(i));
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
