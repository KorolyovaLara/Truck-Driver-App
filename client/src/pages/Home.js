import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
    <div className="container has-text-centered">
      <div>
        <Link to="/login">
          <button className="button is-fullwidth is-large is-warning is-outlined is-inverted">
            <span>
              <strong>LOG IN</strong>
            </span>
          </button>
        </Link>
      </div>
      <br></br>
      <div>
        <Link to="/register">
          <button className="button is-fullwidth is-large is-warning is-outlined">
            <span>
              <strong>REGISTER</strong>
            </span>
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Home;
