import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Divider from "@material-ui/core/Divider";
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
import MenuIcon from "@material-ui/icons/Menu";
import Chips from "../Cart/CartInd";
const SidebarOld1 = () => {
  const [selected__menu, setSelected__menu] = useState(false);
  const location = useLocation();

  const selectedNav = (e) => {};

  return (
    <>
      <div className="sidebar__wrap fluid">
        <div className="top-part">
          <div className=" mb-3 " id="nav__brand">
            <MenuIcon className="mr-3" />
            <Link to={"/lunch"}>
              <img
                className="mr-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                style={{ width: "30px" }}
              />
              <span style={{ color: "black" }}>Y-T RecipeStore</span>
            </Link>
          </div>

          <Link to={"/lunch"}>
            <div
              className={
                location.pathname === "/lunch"
                  ? " selected__menu"
                  : "menu__single"
              }
              onClick={(e) => setSelected__menu(true)}
            >
              <HomeIcon fontSize="large" className="menu__item " /> Home
            </div>
          </Link>
          <Link to={"/explore"}>
            <div
              className={
                location.pathname === "/explore"
                  ? " selected__menu"
                  : "menu__single"
              }
              onClick={(e) => setSelected__menu(true)}
            >
              <ExploreIcon className="menu__item" /> Explore
            </div>
          </Link>
          <Link to={"/subscriptions"}>
            <div
              className={
                location.pathname === "/subscriptions"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <SubscriptionsIcon className="menu__item" /> Subscriptions
            </div>
            <Divider variant="middle" />
          </Link>
          <Link to={"/library"}>
            <div
              className={
                location.pathname === "/library"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <VideoLibraryIcon className="menu__item" /> Library
            </div>
          </Link>
          <Link to={"/history"}>
            <div
              className={
                location.pathname === "/history"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <HistoryIcon className="menu__item" /> History
            </div>
          </Link>
          <Link to={"/yourvideos"}>
            <div
              className={
                location.pathname === "/yourvideos"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <VideoLibraryIcon className="menu__item" /> Your Videos
            </div>
          </Link>
          <Link to={"/cart"}>
            <div
              className={
                location.pathname === "/cart"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <ShoppingCartIcon className="menu__item" /> Cart
            </div>
          </Link>
          <Link to={"/liked"}>
            <div
              className={
                location.pathname === "/liked"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <ThumbUpAltIcon className="menu__item" /> Liked Recipes
            </div>
          </Link>

          <div className="menu__single">
            <MdAccessTimeFilled className="menu__item" /> SUBSCRIPTION
          </div>

          <Divider variant="middle" />
          <Link to={"/settings"}>
            <div
              className={
                location.pathname === "/settings"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <IoMdSettings className="menu__item" /> Settings
            </div>
          </Link>
          <Link to={"/history"}>
            <div
              className={
                location.pathname === "/history"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <FlagIcon className="menu__item" /> Report History
            </div>
          </Link>
          <Link to={"/help"}>
            <div
              className={
                location.pathname === "/help"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <HelpOutlineIcon className="menu__item" /> Help
            </div>
          </Link>
          <Link to={"/feedback"}>
            <div
              className={
                location.pathname === "/feedback"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              <AnnouncementIcon className="menu__item" /> Send Feedback
            </div>
          </Link>
          <Divider variant="middle" />
          <Link to={"/privacyPolicy"}>
            <div
              className={
                location.pathname === "/privacyPolicy"
                  ? " selected__menu"
                  : "menu__single"
              }
            >
              {/*  <IoInformationCircleSharp className="menu__item" />
            Nagaveena <BsBoxArrowRight className=" menu__item" /> */}
              {/*  <p style={{ objectFit: "cover" }}>
              AboutPressCopyrightContact
              usCreatorsAdvertiseDevelopersImpressumNetzDG
              TransparenzberichtNetzDG Complaints TermsPrivacyPolicy & SafetyHow
              YouTube worksTest new features
            </p> */}
            </div>
          </Link>
        </div>
        {/*  <div className="bottom-part">
        <button className="signup__btn btn">Sign up</button>
        <button className="login__btn btn">Login</button>
      </div> */}
      </div>
    </>
  );
};

export default SidebarOld11;
