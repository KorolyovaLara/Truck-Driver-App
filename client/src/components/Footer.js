import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
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
