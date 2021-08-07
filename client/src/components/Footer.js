import React from "react";

import Auth from "../utils/auth";

const Footer = () => {
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
