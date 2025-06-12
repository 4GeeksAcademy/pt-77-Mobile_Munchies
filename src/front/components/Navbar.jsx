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
            style={{ borderRadius: "10px" }}
          />
        </Link>
      </div>

      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ zIndex: 1 }}
      >
        <h1 className="bungee-tint-regular mb-0 text-center"
        style={{ color: "#dc3545", fontWeight: "bold", }}
        >
          MOBILE MUNCHIES
        </h1>
      </div>
      <div className="dropdown ms-auto">
        <button
          className="btn btn-danger dropdown-toggle pr-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>

        <ul
          className="dropdown-menu dropdown-menu-end text-center"
          style={{ backgroundColor: "black" }}
        >
          {!isLoggedIn && (
            <>
              <li className="btn btn-danger d-grid m-1">
                <div className="menubuttons">
                  <Link
                    className="text-decoration-none login text-light"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </li>
              <li className="btn btn-danger d-grid m-1">
                <div className="menubuttons2">
                  <Link
                    className="text-decoration-none text-light signup me-2"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </div>
              </li>
            </>
          )}
          <li>
            {isLoggedIn && (
              <Link className="btn btn-danger d-grid m-1" to="/profile">
                Account
              </Link>
            )}
          </li>
          <li className="btn btn-danger d-grid m-1">
            <div className="menubuttons4">
              <Link
                to="/components/Merch"
                className="text-decoration-none text-light"
              >
                {" "}
                Merch{" "}
              </Link>
            </div>
          </li>
          <li className="btn btn-danger d-grid m-1">
            <div className="menubuttons5">
              <Link
                className="text-decoration-none text-light"
                to="/googlemaptest"
              >
                {" "}
                Trucks{" "}
              </Link>
            </div>
          </li>
          {isLoggedIn && (
            <li className="btn btn-danger d-grid m-1" onClick={handleLogout}>
              <button className="btn btn-danger">Log Out</button>
            </li>
          )}
          <li>
            {isLoggedIn && (
              <Link className="btn btn-primary signup me-2" to="/profile">
                Account
              </Link>
					  )}
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
