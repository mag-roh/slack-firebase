import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/*Avatar for logged in user */}
        <img
          className="header__avatar"
          alt={user.displayName} //{user?.displayName}, the displayName comes back by default with the authentication
          src={user.photoURL} //{user?.photoURL}
        />
        {/*Time icon*/}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/*Search icon*/}
        <SearchIcon />
        {/*input*/}
        <input placeholder="Search Magnetic's Slack" />
      </div>
      <div className="header__right">
        {/*help icon*/}
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
