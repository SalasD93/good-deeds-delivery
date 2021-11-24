import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { HeaderMain, DivMain, H1Main, ImgMain, NavMain, NavListMain, NavItemMain } from './styles.js';
import logo from '../../assets/logo.png';

const alt = 'GOOD DEEDS DELIVERY LOGO';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <NavListMain>
          <NavItemMain>
            <Link to="/" onClick="window.location.reload();">
              HOME
            </Link>
          </NavItemMain>
          <NavItemMain>
            <Link to="/orderHistory">
              ORDER HISTORY
            </Link>
          </NavItemMain>
          <NavItemMain>
            <a href="/map">
              DELIVERY
            </a>
          </NavItemMain>
          <NavItemMain>
            <a href="/" onClick={() => Auth.logout()}>
              LOGOUT
            </a>
          </NavItemMain>
        </NavListMain>
      );
    } else {
      return (
        <NavListMain>
          <NavItemMain>
            <Link to="/" onClick="window.location.reload();">
              HOME
            </Link>
          </NavItemMain>
          <NavItemMain>
            <Link to="/login">
              LOGIN
            </Link>
          </NavItemMain>
          <NavItemMain>
            <Link to="/signup">
              SIGNUP
            </Link>
          </NavItemMain>
        </NavListMain>
      );
    }
  }

  return (
    <HeaderMain>
      <DivMain>
        <ImgMain src={logo} alt={alt} />
        <H1Main>
          <Link to="/" onClick="window.location.reload();">
            Good Deeds Delivery
          </Link>
        </H1Main>
      </DivMain>

      <NavMain>
        {showNavigation()}
      </NavMain>
    </HeaderMain>
  );
}

export default Nav;
