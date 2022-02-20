import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Header from "../Header/Header";
import RecipeStore from "../Food/RecipeStore";
import Sidebar from "./SidebarOld1";
/* 
imports form Sidebar.jsx */
import Avatar from "@material-ui/core/Avatar";

import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import FlagIcon from "@material-ui/icons/Flag";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
const drawerWidth = 240;

const iconName = [
  {
    icon: "HomeIcon",
    name: "Home",
    link: "home",
  },
  {
    icon: "ExploreIcon",
    name: "Explore",
    link: "explore",
  },
  {
    icon: "SubscriptionsIcon",
    name: "Subscriptions",
    link: "subscriptions",
  },
  {
    icon: "VideoLibraryIcon",
    name: "Library",
    link: "library",
  },
  {
    icon: "HistoryIcon",
    name: "History",
    link: "history",
  },
  {
    icon: "VideoLibraryIcon",
    name: "Your Videos",
    link: "yourvideos",
  },
  {
    icon: "ShoppingCartIcon",
    name: "Cart",
    link: "cart",
  },
  {
    icon: "ThumbUpAltIcon",
    name: "Liked Recipes",
    link: "liked",
  },
  {
    icon: "IoMdSettings",
    name: "Settings",
    link: "settings",
  },
  {
    icon: "FlagIcon",
    name: "Report History",
    link: "history",
  },
  {
    icon: "HelpOutlineIcon",
    name: "Help",
    link: "help",
  },
  {
    icon: "AnnouncementIcon",
    name: "Send Feedback",
    link: "feedback",
  },
  {
    icon: "AnnouncementIcon",
    name: " AboutPressCopyrightContact usCreatorsAdvertiseDevelopersImpressumNetzDG TransparenzberichtNetzDG Complaints TermsPrivacyPolicy & SafetyHow YouTube worksTest new features",
    link: "privacyPolicy",
  },
];
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
const SideBarOld2 = () => {
  const [selected__menu, setSelected__menu] = useState(false);
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <div>
              <MenuIcon />
              <Link to={"/lunch"}>
                <img
                  className="mr-2"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                  style={{ width: "30px" }}
                />
                <span style={{ color: "black" }}>Y-T RecipeStore</span>
              </Link>
            </div>
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* header is placed */}
            <Header />
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <>{theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}</>
          </IconButton>
          <div>
            <Link to={"/lunch"}>
              <img
                className="mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                style={{ width: "30px" }}
              />
              <span style={{ color: "black" }}>Y-T RecipeStore</span>
            </Link>
          </div>
        </div>

        {/*   <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/lunch"}>
              <ListItemText
                className={
                  location.pathname === "/lunch"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Home"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/explore"}>
              <ListItemText
                className={
                  location.pathname === "/explore"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Explore"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SubscriptionsIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/subscriptions"}>
              <ListItemText
                className={
                  location.pathname === "/subscriptions"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Home"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VideoLibraryIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/library"}>
              <ListItemText
                className={
                  location.pathname === "/library"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Library"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/history"}>
              <ListItemText
                className={
                  location.pathname === "/history"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"History"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VideoLibraryIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/yourvideos"}>
              <ListItemText
                className={
                  location.pathname === "/yourvideos"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Your Videos"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/cart"}>
              <ListItemText
                className={
                  location.pathname === "/cart"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Cart"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ThumbUpAltIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/liked"}>
              <ListItemText
                className={
                  location.pathname === "/liked"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Liked Recipes"}
              />
            </Link>
          </ListItem>
          <Divider />
          <ListItemText className="menu__single" primary={"SUBSCRIPTION"} />
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="S" src="/static/images/avatar/1.jpg" />
            </ListItemIcon>
            <Link to={"/"}>
              <ListItemText
                /*   className={
                  location.pathname === "/" ? " selected__menu" : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)} */
                primary={"Shettru kitchen"}
                style={{ color: "black" }}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar alt="DG" src="/static/images/avatar/1.jpg" />
            </ListItemIcon>
            <Link to={"/"}>
              <ListItemText
                /*  className={
                  location.pathname === "/" ? " selected__menu" : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)} */
                style={{ color: "black" }}
                primary={"Destination Germany"}
              />
            </Link>
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemIcon>
              <IoMdSettings fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/settings"}>
              <ListItemText
                className={
                  location.pathname === "/settings"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Settings"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FlagIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/history"}>
              <ListItemText
                className={
                  location.pathname === "/history"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Report History"}
              />
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <HelpOutlineIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/help"}>
              <ListItemText
                className={
                  location.pathname === "/help"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Help"}
              />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AnnouncementIcon fontSize="large" className="menu__item " />
            </ListItemIcon>
            <Link to={"/feedback"}>
              <ListItemText
                className={
                  location.pathname === "/feedback"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"Send Feedback"}
              />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <Link to={"/privacyPolicy"}>
              <ListItemText
                className={
                  location.pathname === "/privacyPolicy"
                    ? " selected__menu"
                    : "menu__single"
                }
                onClick={(e) => setSelected__menu(true)}
                primary={"lorem ipsum"}
              />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideBarOld2;
