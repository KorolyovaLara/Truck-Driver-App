import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";



const Register = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }

  return (
    <div class="container has-text-centered">
      <h1>Register Page</h1>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">to your Profile Page.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div class="field">
              <label class="label">Nickname</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  placeholder="Nickname"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  placeholder="Email "
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  placeholder="Password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  value={formState.password}
                  onChange={handleChange}/>
                <i onClick={togglePasswordVisiblity} class="fas fa-eye"></i>
                <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <button
                  class="button is-link"
                  style={{ cursor: "pointer" }}
                  type="submit"
                  >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}

        {error && <div class="tag is-danger">{error.message}</div>}
      </div>
    </div>
  );
};

export default Register;
