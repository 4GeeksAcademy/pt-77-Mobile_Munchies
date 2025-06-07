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
    <nav className="navbar custom-navbar position-relative">
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

      <div className="dropdown ms-auto">
        <button
          className="btn btn-danger dropdown-toggle pr-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu dropdown-menu-end text-center">
          <li className="btn btn-danger d-grid m-1">
            <div className="menubuttons">
              {!isLoggedIn && (
                <Link className="text-decoration-none login text-light" to="/login">
                  Login
                </Link>
              )}
            </div>
          </li>
          <li className="btn btn-danger d-grid m-1">
            <div className="menubuttons2">
              {!isLoggedIn && (
                <Link className="text-decoration-none text-light signup me-2" to="/signup">
                  Signup
                </Link>
              )}
            </div>
          </li>
          {isLoggedIn && (
            <li className="btn btn-danger d-grid m-1">
              <div className="menubuttons3">
                <button className="text-decoration-none text-light" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </li>
          )}
          <li className="btn btn-danger d-grid m-1">
            <div className="menubuttons4">
              <Link to="/components/Merch" className="text-decoration-none text-light"> Merch </Link>
            </div>
          </li>
          <li className="btn btn-danger d-grid m-1">
            <div className="menubuttons5">
              <Link className="text-decoration-none text-light" to="/googlemaptest"> Trucks </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
