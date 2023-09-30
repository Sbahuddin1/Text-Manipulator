import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(p) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${p.mode} navbar-${p.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            {p.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {p.navItem1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {p.navItem2}
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch mx-2 text-${
                p.mode == "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={p.toggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Darkmode
              </label>
            </div>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
// setting PropTypes to help in future(instead, using Typescript is recomended.)
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // if 'isRequired' prop must be set in App if there is no default prop
  navItem1: PropTypes.string,
  navItem2: PropTypes.string,
};
// Default props appear if props are not set in App
Navbar.defaultProps = {
  title: "Name",
  navItem1: "blank",
  navItem2: "blank",
};
