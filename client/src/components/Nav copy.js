import React from "react";
import { useHistory } from "react-router-dom";
import Auth from "../utils/auth";
import $ from "jquery";

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
          <div class="navbar-brand">
            <span class="navbar-item">
              <strong>Truck Driver App</strong>
            </span>
            <span
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
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
              </>
            )}

            <a href="/contact" class="navbar-item is-tab">
              Contact
            </a>
            <a href="/about" class="navbar-item is-tab">
              About
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
