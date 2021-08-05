import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <h4>
          &copy; {new Date().getFullYear()} -{" "}
          <a
            href="https://github.com/KorolyovaLara"
            target="_blank"
            rel="noreferrer"
          >
            Lara Korolyova
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
