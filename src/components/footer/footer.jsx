//libs
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerLogo from "../../assets/1.png";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="matter">
        <img src={footerLogo} alt="logo" />
        <p>
          When do they work well, and when do they on us and finally, when do we
          actually need how can we avoid them.
        </p>
        <div>
          <p style={{ fontWeight: "600", color: "white" }}>Follow us on</p>
          <div className="icons">
            <FaFacebook size={20} className="icon" />
            <FaTwitter size={20} className="icon" />
            <FaInstagram size={20} className="icon" />
          </div>
        </div>
      </div>
      <div className="ulDiv">
        <div>
          <ul>
            <li style={{ fontWeight: "600", fontSize: "20px" }}>Information</li>
            <li>
              <Link to={"/about-us"} className="lis">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/services"} className="lis">
                Our Services
              </Link>
            </li>
            <li>
              <Link to={"/howitworks"} className="lis">
                How it Works
              </Link>
            </li>
            <li>
              <Link to={"/whychooseus"} className="lis">
                Why Choose Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li style={{ fontWeight: "600", fontSize: "20px" }}>Contact Us</li>
            <li>
              <Link
                to={"/about-us"}
                className="lis"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <FaPhoneVolume /> +91 72001 68295
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="lis"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <MdOutlineEmail /> info@stitchcart.co.in
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h4>Newsletter</h4>
        <input type="email" placeholder="Enter your email" />
        <div className="checkboxMatter">
          <input type="checkbox" name="emailConsent" value="agree"></input>
          <p>
            I'm okay with getting emails and having that activity and privacy
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
