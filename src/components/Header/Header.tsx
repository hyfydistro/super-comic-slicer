import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

import SCSLogo from "../../../public/assets/images/logo.svg"

function Header(): ReactElement {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img className="header-main__logo" src={SCSLogo} alt="logo" />
        </NavLink>

        {/* // TODO Phase #3 */}
        {/* <ul className="header-main__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `${"nav-link__button"} ${isActive ? "nav-link--active" : null}`}
            >
                Use Tool
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `${"nav-link"} ${isActive ? "nav-link--active" : null}`}
            >
              About
            </NavLink>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
