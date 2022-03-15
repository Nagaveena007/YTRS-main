import "./Home.css";
import "../../components/Home/Home.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Icon from "@material-ui/core/Icon";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { loadCSS } from "fg-loadcss";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { addToCartAction } from "../../redux/action";
import PostAddIcon from "@material-ui/icons/PostAdd";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import { addToFavoAction, removeFromFavoAction } from "../../redux/action";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    /*  color: theme.palette.primary.light, */
    color: "white",
    fontSize: "large",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const RecipeCard = ({ breakfast, i }) => {
  const like = useSelector((s) => s.like);

  const dispatch = useDispatch();

  const isFav = like.likedRecipes.find((food) => food.id === breakfast.id);
  const toggleFavourite = () => {
    isFav
      ? dispatch(removeFromFavoAction(breakfast))
      : dispatch(addToFavoAction(breakfast));
  };

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
      <Grid>
        <Box marginRight={1.5} my={5} style={{ width: "18rem" }}>
          {/*    <Link to={`/details/` + breakfast.id}>
            <img style={{ width: "18rem", height: 180 }} src={breakfast.img} />
          </Link> */}
          {/* <Link to={`/details/` + breakfast.id}> */}
          <ImageList className={classes.imageList}>
            <ImageListItem style={{ width: "100%" }}>
              <Link to={`/details/` + breakfast.id}>
                <img
                  src={breakfast.img}
                  alt={breakfast.name}
                  style={{ width: "18rem", height: 180 }}
                />
              </Link>
              <ImageListItemBar
                title={
                  <AddShoppingCartIcon
                    style={{ color: "white" }}
                    size={38}
                    className="mr-2"
                    onClick={() => {
                      console.log("clicked");
                      dispatch(addToCartAction(breakfast));
                    }}
                  />
                }
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton>
                    {/*  <StarBorderIcon className={classes.title} /> */}

                    {isFav ? (
                      <AiFillHeart
                        color="#f50057"
                        size={26}
                        onClick={toggleFavourite}
                      />
                    ) : (
                      <AiOutlineHeart
                        color="white"
                        size={26}
                        onClick={toggleFavourite}
                      />
                    )}
                  </IconButton>
                }
              />
            </ImageListItem>
          </ImageList>

          <Box pr={2}>
            <Box className="d-flex mt-3">
              <Avatar
                className="mr-3 "
                alt="Ted talk"
                src="/shetru-kitchen.jpg"
              />
              <Typography gutterBottom variant="body2">
                {breakfast.title}
              </Typography>
            </Box>
            <Box className="" style={{ marginLeft: "57px" }}>
              <Typography display="block" variant="body2" color="textSecondary">
                {breakfast.name}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Price: € {breakfast.price} • Cooking time:
                {breakfast.cookingTime} min
              </Typography>
              <Typography variant="caption" color="textSecondary" className="">
                <IconButton
                  variant="warning"
                  color="textSecondary"
                  component="p"
                >
                  {/*  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    onClick={() => {
                      console.log("clicked");
                      dispatch(addToCartAction(breakfast));
                    }}
                    startIcon={<AddShoppingCartIcon />}
                  >
                    cart
                  </Button> */}
                  {/*       {isFav ? (
                    <AiFillHeart
                      color="red"
                      size={26}
                      className="ml-5"
                      onClick={toggleFavourite}
                    />
                  ) : (
                    <AiOutlineHeart
                      color="red"
                      size={26}
                      className="ml-5"
                      onClick={toggleFavourite}
                    />
                  )} */}
                </IconButton>
              </Typography>{" "}
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default RecipeCard;
{
  /*   <Card
        className={`mx-1 my-2   ${classes.root}`}
        style={{ width: "18rem" }}
      >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              N
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={breakfast.name}
          subheader={`Cooking time: ${breakfast.cookingTime} min`}
        />
        <Link to={`/details/` + breakfast.id}>
          <CardMedia
            className={classes.media}
            image={breakfast.img}
            title={breakfast.name}
            style={{ width: "18rem" }}
          />
        </Link>
        <CardContent>
          <Typography
            noWrap
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "16rem",
            }}
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions>
          <Typography paragraph variant="body2">
            <strong>Price: € {breakfast.price}</strong>
          </Typography>
          <Typography paragraph variant="body2">
            {isFav ? (
              <AiFillHeart
                color="red"
                size={26}
                className="ml-5"
                onClick={toggleFavourite}
              />
            ) : (
              <AiOutlineHeart
                color="red"
                size={26}
                className="ml-5"
                onClick={toggleFavourite}
              />
            )}
          </Typography>
          <Typography paragraph variant="body2">
            <IconButton aria-label="share">
              <PostAddIcon />
            </IconButton>
          </Typography>
        </CardActions>
        <CardActions>
          <IconButton variant="warning" color="textSecondary" component="p">
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              onClick={() => {
                console.log("clicked");
                dispatch(addToCartAction(breakfast));
              }}
              startIcon={<AddShoppingCartIcon />}
            >
              cart
            </Button>
          </IconButton>
          <IconButton variant="warning" color="textSecondary" component="p">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
            >
              buy
            </Button>
          </IconButton>
          <IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </IconButton>
        </CardActions>
      </Card> */
}

{
  /*      <ReactPlayer
                className={classes.media} 
                url={breakfast.url}
                controls={true}
                style={
                  {
                    // width: "16rem",
                    //  objectFit: "cover", 
                  }
                }
              /> */
}
{
  /*  <iframe
                src={breakfast.url}
                frameBorder="0"
                allowFullScreen
                title={breakfast.name}
                style={{ width: "18rem" }}
              ></iframe> */
}
