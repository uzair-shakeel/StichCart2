import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  return (
    <div>
      {/* <div className="" style={{ background: "#e51747" }}>
        <div className="nav-container">
          <div className="elementor-widget-image">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo-image" />
            </Link>
          </div>
          <div className="">
            <ul
              style={{ display: "flex", alignItems: "center", color: "white" }}
            >
              <li>
                <Link to="/services" className="navbar-links">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="navbar-links">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="navbar-links">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="navbar-links">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* <div className="mobile">
        <Link to={"/"} onClick={() => setSidebarOpen(false)}>
          <img src={logo} className="logo" alt="Logo" />
        </Link>
        <div onClick={() => setSidebarOpen(!sidebarOpen)} className="navbtn">
          {sidebarOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={26} />}
        </div>
      </div> */}
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
