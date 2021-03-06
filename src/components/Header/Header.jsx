import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../components/Header/Header.css";
import { Link } from "react-router-dom";
import CartIndicator from "../Cart/CartIndicator";

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

import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
const handleClick = () => {
  console.info("You clicked the Chip.");
};
const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
  },
  paper: {
    border: "1px solid #d3d4d5",
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

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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

            <div>
              <Avatar
                alt="Remy Sharp"
                src="/me-discord.jpg"
                className="mr-1 ml-2 mt-2"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
              />

              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to={"/account"}>
                  <StyledMenuItem>
                    <ListItemText
                      primary="My Account"
                      style={{ color: "black" }}
                    />
                  </StyledMenuItem>
                </Link>

                <Link to={"/orders"}>
                  <StyledMenuItem>
                    <ListItemText
                      primary="My Orders"
                      style={{ color: "black" }}
                    />
                  </StyledMenuItem>
                </Link>
                <Link to={"/liked-Recipes"}>
                  <StyledMenuItem>
                    <ListItemText
                      primary="Favourite Recipes"
                      style={{ color: "black" }}
                    />
                  </StyledMenuItem>
                </Link>
                <Link to={"/login"}>
                  <StyledMenuItem>
                    <ListItemText
                      primary="Sign Out"
                      style={{ color: "black" }}
                    />
                  </StyledMenuItem>
                </Link>
              </StyledMenu>
            </div>
          </Nav>
          {/*  <Search /> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
