import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

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
    <div class="hero">
    <div class="container has-text-centered">
      <h4>Login Page</h4>
      <form onSubmit={handleFormSubmit}>
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input
              class="input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input
              class="input"
              placeholder="Please enter your password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class="button is-link"
              style={{ cursor: "pointer" }}
              type="submit"
              disabled={loading}
            >
            Submit
            </button>
          </div>
        </div>
      </form>
      {error && <div class="tag is-danger">{error.message}</div>}
    </div>
    </div>
  );
};

export default Login;
