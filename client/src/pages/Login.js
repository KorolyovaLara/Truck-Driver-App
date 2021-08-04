import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, loading }] = useMutation(LOGIN_USER);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      history.push("/profile");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <div>
          <h4>Login</h4>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: "pointer" }}
                type="submit"
                disabled={loading}
              >
                Submit
              </button>
            </form>
            {error && <div>{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
