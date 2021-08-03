import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export default function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>Truck Driver App</h1>
        </Link>
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-primary m-2" to="/profile">
              View My Profile
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </>
      </div>
    </nav>
  );
}
