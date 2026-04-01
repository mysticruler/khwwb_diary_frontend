import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/lolo.png";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>


      <nav className="navbar glass">
        <div className="logo">
          <img src={logo} alt="KHWWB Logo" className="logo-img" />
          <span className="shiny-text">KERALA HEADLOAD WORKERS WELFARE BOARD</span>
        </div>


        <ul className="nav-links">
          <li className="nav-item"> <Link to="/">Home</Link></li>

          <li className="nav-item dropdown">
            About Us
            <div className="dropdown-menu glass">
              <span>Board</span>
              <span><Link to="/governing-body">Governing Body</Link></span>
              <span><Link to="/Whoiswho">Administrative Hierarchy</Link></span>

              {/* Schemes with submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Schemes ▸</span>

                <div className="submenu glass">

                  <span>
                    <Link to="/schemes/unattached">Unattached Scheme</Link>
                  </span>

                  <span>
                    <Link to="/schemes/scattered">Scattered Scheme</Link>
                  </span>

                  <span>
                    <Link to="/schemes/attached">Attached Scheme</Link>
                  </span>

                </div>
              </div>

              <span><Link to="/Officelist">Office Details</Link></span>
            </div>
          </li>

          <li className="nav-item dropdown">
            Documents
            <div className="dropdown-menu glass">

              {/* Act and Rules submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Act & Rules ▸</span>
                <div className="submenu glass">
                  <span>Act & Rules</span>
                  <span>Circular</span>
                  <span>Orders</span>
                </div>
              </div>

              <span>Whats New?</span>
              <span>Archives</span>
              <span>Coolie Pattika</span>

              {/* Workers submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Workers ▸</span>
                <div className="submenu glass">
                  <span>Forms</span>
                  <span>Welfare Details</span>
                </div>
              </div>

              {/* Employers submenu */}
              <div className="submenu-wrapper">
                <span className="submenu-title">Board Staff ▸</span>
                <div className="submenu glass">
                  <span>CPF Rules</span>
                  <span>Staff Rules</span>
                  <span>Forms</span>
                  <span>Pay Revision</span>
                  <span>D.A</span>
                  <span>seniority list</span>
                  <span>Others</span>
                </div>
              </div>

              <span>Employer</span>
              <span>Forms</span>
              <span>Tender & Notices</span>
              <span>Welfare Details Unattached</span>
              <span>Welfare Details Scattered</span>

            </div>
          </li>

          <li className="nav-item dropdown">
            RTI
            <div className="dropdown-menu glass">
              <span>RTI Act</span>
              <span>Online RTI Application</span>
              <span>List Of Officials</span>
            </div>
          </li>

          <li className="nav-item dropdown">
            Online Services
            <div className="dropdown-menu glass">
              <span>Grievance Redressal</span>
              <span>Worker Request</span>
              <span>Online Welfare Application</span>
              <span>Online Payment</span>


            </div>
          </li>

          <li className="search-li">
            <button className="nav-search-icon" aria-label="Search">🔍</button>
          </li>
        </ul>






        <div
          className="login-wrapper"
          onMouseLeave={() => setShowLogin(false)}
        >
          <button
            className="login-btn"
            onClick={() => setShowLogin(prev => !prev)}
          >
            Login
          </button>

          {showLogin && (
            <div className="login-popup glass">
              <p>Worker Login</p>
              <p>Employer Login</p>
              <p>Admin Login</p>
            </div>
          )}
        </div>


      </nav>
    </>
  );
}

export default Navbar;