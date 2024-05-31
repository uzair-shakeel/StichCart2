import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
// import "./navbar.scss";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  return (
    <div>
      <div className="desktop">
        <div className="container">
          <Link to={"/"}>
            <img src={logo} className="logo" alt="Logo" />
          </Link>
          <div className="menu">
            <Link to={"/login"} className="loginDiv">
              <FaRegCircleUser
                size={28}
                className="icon"
                style={{ height: "20px" }}
              />
              <div>Login</div>
            </Link>
            <ul>
              <li>
                <Link to="/services" className="navli">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="navli">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="navli">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="navli">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mobile">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="Logo" />
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="navbtn">
          {sidebarOpen ? (
            <IoClose size={25} className="navbtn" />
          ) : (
            <GiHamburgerMenu size={25} className="navbtn" />
          )}
        </button>
      </div>
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <Link to="/services" onClick={() => setSidebarOpen(false)}>
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/how-it-works" onClick={() => setSidebarOpen(false)}>
              How it Works
            </Link>
          </li>
          <li>
            <Link to="/why-choose-us" onClick={() => setSidebarOpen(false)}>
              Why Choose Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setSidebarOpen(false)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setSidebarOpen(false)}
              className="login-icon"
             
            >
              <FaRegCircleUser size={23} />
              Log In
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
