import React from "react";
import { Link, useHistory } from "react-router-dom";
import Auth from "../utils/auth";

export default function Nav() {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div>
        <h1>Truck Driver App</h1>
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile">My Profile</Link>
            <Link to="/today">Runsheet</Link>
            <Link to="/logs">Summary</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/">Home</Link>
        )}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
