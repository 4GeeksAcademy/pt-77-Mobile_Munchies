import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const isLoggedIn = sessionStorage.getItem("token") !== null;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light position-relative">
      
      <div className="d-flex align-items-center">
        <Link to="/">
          <img
            className="logo"
            src="https://images.deepai.org/chat-style-image/0459cd1bb41d4e18b3774762886eeac8/output.jpg"
            alt="Logo"
          />
        </Link>
      </div>

      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ zIndex: 1 }} 
      >
        <h1 className="mb-0 text-center">MOBILE MUNCHIES</h1>
      </div>

      {/* Right side: Dropdown menu */}
      <div className="dropdown ms-auto">
        <button
          className="btn btn-danger dropdown-toggle pr-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
         
          <li>
            <div className="menubuttons">
              {!isLoggedIn && (
                <Link className="btn btn-danger login me-2" to="/login">
                  Login
                </Link>
              )}
            </div>
          </li>
          <li>
            <div className="menubuttons2">
              {!isLoggedIn && (
                <Link className="btn btn-danger signup me-2" to="/signup">
                  Signup
                </Link>
              )}
            </div>
          </li>
          <li>
            <div className="menubuttons3">
              {isLoggedIn && (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Log Out
                </button>
              )}
            </div>
          </li>
          <li>
            <div className="menubuttons4">
              <Link to="/components/Merch">
                <button type="button" className="btn btn-danger">
                  Merch
                </button>
              </Link>
            </div>
          </li>
          <li>
            <div className="menubuttons5">
              <Link to="/googlemaptest">
                <button className="btn btn-danger">Trucks</button>
              </Link>
            </div>
          </li>
          <li>
            <div className="menubuttons6">
              <Link to="/calendlypages">
                <button className="btn btn-danger">Booking</button>
              </Link>
            </div>
          </li>
          <li>
            {isLoggedIn && (
              <Link className="btn btn-primary signup me-2" to="/profile">
                Account
              </Link>
					  )}
          </li>
        </ul>
      </div>
    </nav>
  );
};