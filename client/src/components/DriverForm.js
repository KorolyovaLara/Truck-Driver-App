import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SAVE_INFO } from "../utils/mutations";
import Auth from "../utils/auth";

const DriverForm = () => {
  const [driverForm, setDriverForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    driverLicence: "",
  });

  const [saveDriver, { error }] = useMutation(SAVE_INFO);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDriverForm({ ...driverForm, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const response = await saveDriver({
        variables: { ...driverForm },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
    }
    setDriverForm({
      firstName: "",
      lastName: "",
      companyName: "",
      phoneNumber: "",
      driverLicence: "",
    });
  };
  return (
    <div>
      <h4>Add your driver details below</h4>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <input
            placeholder="Your First Name"
            name="firstName"
            type="text"
            value={driverForm.firstName}
            onChange={handleChange}
          />
          <input
            placeholder="Your Last Name"
            name="lastName"
            type="text"
            value={driverForm.lastName}
            onChange={handleChange}
          />
          <input
            placeholder="Your Company Name"
            name="companyName"
            type="text"
            value={driverForm.companyName}
            onChange={handleChange}
          />
          <input
            placeholder="Your Phone Number"
            name="phoneNumber"
            type="tel"
            value={driverForm.phoneNumber}
            onChange={handleChange}
          />
          <input
            placeholder="Your Driver's Licence Number"
            name="driverLicence"
            type="number"
            value={driverForm.driverLicence}
            onChange={handleChange}
          />

          <button style={{ cursor: "pointer" }} type="submit">
            Submit
          </button>
          {error && <div>{error.message}</div>}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse skills. Please{" "}
          <Link to="/login">login</Link> or <Link to="/register">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default DriverForm;
