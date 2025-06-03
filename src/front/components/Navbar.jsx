import { Link, useNavigate, NavLink } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("token") !== null;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className="logo"
              src="https://images.deepai.org/chat-style-image/0459cd1bb41d4e18b3774762886eeac8/output.jpg"
            />
          </span>
        </Link>
		<div className="title"><h1>MOBILE MUNCHIES</h1></div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-danger dropdown-toggle pr-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" type="button"></button>
            <div className="menubuttons">
              {!isLoggedIn && (
                <>
                  <Link className="btn btn-danger login me-2" to="/login">
                    Login
                  </Link>
                </>
              )}
            </div>
          </li>
          <li>
            <button className="dropdown-item" type="button"></button>
            <div className="menubuttons2">
              {" "}
              {!isLoggedIn && (
                <Link className="btn btn-danger signup me-2" to="/signup">
                  Signup
                </Link>
              )}
            </div>
          </li>
          <li>
            <button className="dropdown-item" type="button"></button>
            <div className="menubuttons3">
              {isLoggedIn && (
                <button className="btn btn-danger" onClick={handleLogout}>
                  Log Out
                </button>
              )}
            </div>
          </li>

          <li>
            <button className="dropdown-item" type="button"></button>
            <div className="menubuttons4">
              <Link to="/components/Merch">
                <button type="button" className="btn btn-danger">
                  Merch
                </button>
              </Link>
            </div>
          </li>
          <li>
            <button className="dropdown-item" type="button"></button>
            <div className="menubuttons5">
              <Link to="/googlemaptest">
                <button className="btn btn-danger">Google Maps</button>
              </Link>
            </div>
          </li>
          <li>
            <button className="dropdown-item" type="button"></button>
            <div className="menubuttons6">
              {" "}
              <Link to="/calendlypages">
                <button className="btn btn-danger">Calendly Pages</button>
              </Link>
            </div>
          </li>
          <li>
            <button className="dropdown-item" type="button"></button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
