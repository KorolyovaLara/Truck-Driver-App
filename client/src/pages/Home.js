import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
      <Link to="/register">
        <button>REGISTER</button>
      </Link>
    </div>
  );
}

export default Home;
