import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { removeFromCartAction } from "../../redux/action";
import "../../components/Home/Home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";
import { loadCSS } from "fg-loadcss";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

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
  const classes = useStyles();
  const dispatch = useDispatch();

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
      <div className="card mb-3" style={{ width: "58em" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={breakfast.img}
              alt="..."
              style={{
                width: "15rem",
                height: "30vh",
                /*, objectFit: "contain", */
              }}
            />
          </div>
          <div className="col-md-8">
            <div disableSpacing className="card-body">
              <h5 className="card-title">{breakfast.name}</h5>
              <small>In stock</small> <br />
              <ButtonGroup
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
              >
                <Button size="small" fontSize="small">
                  -
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled
                  style={{ color: "black" }}
                >
                  1
                </Button>
                <Button>+</Button>
              </ButtonGroup>
              <p className="card-text">{breakfast.ingredients}</p>
              <p className="card-text">
                <small className="text-muted">{`Cooking time: ${breakfast.cookingTime} min`}</small>
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  className={`mt-2 ${classes.button}`}
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    dispatch(removeFromCartAction(i));
                  }}
                >
                  Delete
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
