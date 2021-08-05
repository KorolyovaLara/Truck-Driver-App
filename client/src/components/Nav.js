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
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  });
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item">
          <strong>Truck Driver App</strong>
        </h1>
      </div>

      {Auth.loggedIn() ? (
        <div class="navbar-end">
          <div class="navbar-item">
            <i class="fas fa-truck"></i>
          </div>
          <div class="navbar-item">
            <button class="button is-danger" onClick={logout}>
              Logout
            </button>
          </div>
          <div class="navbar-item">
            <i class="fas fa-truck"></i>
          </div>
        </div>
      ) : (
        <div class="navbar-end">
          <div class="navbar-item">
            <i class="fas fa-truck"></i>
          </div>
          <a href="/" class="navbar-item is-tab">
            Home
          </a>
          <div class="navbar-item">
            <i class="fas fa-truck"></i>
          </div>
        </div>
      )}

      <div class="navbar-end">
        <a href="/contact" class="navbar-item is-tab">
          Contact
        </a>
        <a href="/about" class="navbar-item is-tab">
          About
        </a>
      </div>
    </nav>
  );
}
