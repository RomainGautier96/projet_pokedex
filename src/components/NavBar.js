import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          exact
          activeStyle={{ fontWeight: "bold", color: "red" }}
        >
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/list" activeStyle={{ fontWeight: "bold", color: "red" }}>
          Accéder à ma liste
        </NavLink>
      </li>
      <li>
        <NavLink to="/lorem" activeStyle={{ fontWeight: "bold", color: "red" }}>
          Lorum Ipsum
        </NavLink>
      </li>
    </ul>
    <hr />
  </nav>
);

export default NavBar;
