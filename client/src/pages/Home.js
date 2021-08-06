import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="container has-text-centered">
      <div>
        <Link to="/login">
          <button class="button is-fullwidth is-large is-warning is-outlined is-inverted">
            <span>
              <strong>LOG IN</strong>
            </span>
          </button>
        </Link>
      </div>
      <br></br>
      <div>
        <Link to="/register">
          <button class="button is-fullwidth is-large is-warning is-outlined">
            <span>
              <strong>REGISTER</strong>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
