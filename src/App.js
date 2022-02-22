import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import FooterPart from "./components/Footer/FooterPart";
import Home from "./components/Home/Home";
import BreakFast from "./components/BreakFast/BreakFast";
import RecipeStore from "./components/Food/RecipeStore";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/Payment/CheckOut";
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "./components/Home/RecipeCard";
import PaymentPage from "./components/Details/Reviews";
import CartInd from "./components/Cart/CartInd";
import Sidebar from "./components/Navbar/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import LikedRecipes from "./components/LikedRecipes/LikedRecipes";
import DetailsPage from "./components/Details/DetailsPage";
import NotFound from "./components/NotFoundPage/NotFound";
import OrderSuccess from "./components/Payment/OrderSuccess";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
        <Container fluid className={classes.root}>
          <Sidebar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Routes>
              {/*               <Route path="/" element={<RecipeStore />} />
               */}{" "}
              <Route path="/breakfast" element={<BreakFast />} />
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/payment-page" element={<PaymentPage />} />
              <Route path="/cart-Ind" element={<CartInd />} />
              <Route path="/liked-Recipes" element={<LikedRecipes />} />
              <Route path="/details/:recipeId" element={<DetailsPage />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Container>
        {/*  <FooterPart /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
/* youtube-API-Key= "AIzaSyBAYCE_KG_1yDtWc5qGNPSi7jqfngrpMUY" */
