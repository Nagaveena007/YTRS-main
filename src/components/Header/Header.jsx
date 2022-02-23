import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "../../components/Header/Header.css";
import { Link } from "react-router-dom";
import CartIndicator from "../Cart/CartIndicator";
import Search from "./Search";
import Chips from "../Cart/CartInd";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import { InputGroup, FormControl } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import IconButton from "@material-ui/core/IconButton";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
const handleClick = () => {
  console.info("You clicked the Chip.");
};
const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Badge);
const useStyles = makeStyles({
  root: {
    width: "80%",
  },
  nav: {
    position: "-webkit-sticky",
    position: "sticky",
  },
});
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar
        /* sticky="top" */
        bg=""
        expand="lg"
        id=""
        className=""
        style={
          {
            /* backgroundColor: "pink",
          position: "-webkit-sticky",
          position: "sticky", */
          }
        }
      >
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" nav__link  "
            id="nav-tabs"
            style={{ width: "700px", marginLeft: "184px" }}
            navbarScroll
          >
            <InputGroup className="mt-2">
              <FormControl className="" placeholder="Search" style={{}} />

              <InputGroup.Append>
                <InputGroup.Text
                  id="basic-addon2"
                  style={{ height: "38px", width: "62px" }}
                >
                  <SearchIcon />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <IconButton aria-label="mic" className="ml-2 mt-1 ">
              <StyledBadge color="secondary">
                <MicIcon style={{ borderRadius: "50%" }} />
              </StyledBadge>
            </IconButton>
          </Nav>
          <Nav className="ml-auto nav__left__icons">
            <AppsRoundedIcon
              className="nav__menu "
              style={{ color: "#707070" }}
            />
            <NotificationsNoneIcon
              className="nav__notification"
              style={{ color: "#707070" }}
            />
            <CartIndicator />
            <Avatar
              alt="Remy Sharp"
              src="/me-discord.jpg"
              className="mr-1 ml-2 mt-2"
            />
          </Nav>
          {/*  <Search /> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
