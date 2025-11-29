import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
          <div>
            <YouTubeIcon />
          </div>
        </div>
        <div className="footer_data">
          <div className="footer_data_inner">
            <div>
              <p>Audio Description</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p>Help Center</p>
              <p>Jobs</p>
              <p>Legal Notices</p>
              <p>Don Not Sell or Share My Personal Information</p>
            </div>
            <div>
              <p>Gift Cards</p>
              <p>Netflix Shop</p>
              <p>Cookie Preferences</p>
              <p>Ad Choices</p>
            </div>
            <div>
              <p>Media Center </p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
            </div>
          </div>
          <div className="footer_copyright">
            <p>© 1997–2025 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
