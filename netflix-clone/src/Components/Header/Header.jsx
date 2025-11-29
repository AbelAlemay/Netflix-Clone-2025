import React from "react";
import "./header.css";
import netflix_logo from "../../assets/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <img src={netflix_logo} alt="netflix-logo" />
              <li>Home</li>
              <li>Shows</li>
              <li>Movies</li>
              <li>Games</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>

          <div className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
