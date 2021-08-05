import React from "react";
import Auth from "../utils/auth";

const Footer = () => {
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
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          {Auth.loggedIn() ? (
            <ul>
              <li>
                <a href="/profile">My Profile</a>
              </li>
              <li>
                <a href="/runsheet">Runsheet </a>
              </li>
              <li>
                <a href="/summary">Summary</a>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <a
                  href="https://github.com/KorolyovaLara"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>
                    &copy; {new Date().getFullYear()} - Lara Korolyova
                  </strong>
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
