import { RxAvatar } from "react-icons/rx";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import "./header.css";
import Cookie from "js-cookie";

const Navbar = () => {
  const history = useHistory();

  const Logout = () => {
    Cookie.remove("jwt_token");
  };

  const Profile = () => {
    history.replace("/profile");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <a className="navbar-brand text-primary" href="/">
          MovieDB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profitilo
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
            <li
              className="nav-item me-3"
              style={{ fontSize: 23, color: "#198754" }}
            >
              <RxAvatar onClick={Profile} />
            </li>
            <li
              className="nav-item me-3"
              style={{ fontSize: 23, color: "#6610f2" }}
            >
              <RiLogoutCircleRLine onClick={Logout} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
