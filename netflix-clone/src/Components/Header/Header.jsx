import React, { useState, useEffect } from "react";
import "./header.css";
import netflix_logo from "../../assets/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`header_outer_container ${isScrolled ? "scrolled" : ""}`}>
        <div className="header_container">
          <div className="header_left">
            <img src={netflix_logo} alt="netflix-logo" className="logo" />
            <button
              className="hamburger"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <ul className="desktop_nav">
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

      {/* Mobile menu overlay */}
      <nav
        className={`mobile_menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile_menu_inner" onClick={(e) => e.stopPropagation()}>
          <button
            className="mobile_close"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <CloseIcon />
          </button>
          <ul>
            <li>Home</li>
            <li>Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
