import React from "react";
import { useHistory } from "react-router-dom";

import Auth from "../utils/auth";

export default function Nav() {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    history.push("/");
  };
  //NAVBAR ACTIVE BUTTON CHANGE
  return (
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <strong class="navbar-item">Truck Driver App</strong>
        </div>

        {Auth.loggedIn() ? (
          <>
            <span class="navbar-item">
              <a class="button is-danger" onClick={logout}>
                <span class="icon">
                  <i class="fas fa-truck"></i>
                </span>
                <span>Logout</span>
              </a>
            </span>
          </>
        ) : (
          <>
            <span class="navbar-item">
              <a class="button is-success is-inverted is-active" href="/">
                <span class="icon">
                  <i class="fas fa-truck"></i>
                </span>
                <span>Home</span>
              </a>
            </span>

            <a href="/contact" class="navbar-item">
              Contact
            </a>
            <a href="/about" class="navbar-item">
              About
            </a>
          </>
        )}
      </header>
    </div>
  );
}
