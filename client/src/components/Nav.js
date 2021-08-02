import React from "react";

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <a href="/">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="/login">Login</a>
        </div>
        <div style={linkStyle}>
          <a href="/register">Register</a>
        </div>
        <div style={linkStyle}>
          <a href="/about">About</a>
        </div>
        <div style={linkStyle}>
          <a href="/contact">Contact</a>
        </div>
      </section>
    </nav>
  );
}
