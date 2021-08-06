import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_INFO } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const DriverForm = () => {
  const [driverForm, setDriverForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    driverLicence: "",
  });

  const [saveInfo] = useMutation(SAVE_INFO);

  const { loading, data } = useQuery(QUERY_ME);
  const driverInformation = data?.me.driver || [];

  console.log("main", driverInformation);
  if (loading) {
    return <div class="tag is-warning">Loading...</div>;
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setDriverForm({ ...driverForm, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await saveInfo({
        variables: { dataDriver: { ...driverForm } },
      });
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Something went wrong on handleFormSubmit!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {driverInformation ? (      
        <button>Update details</button>
      ) : (
      <>
        <h4>Add your driver details below</h4>

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
            type="number"
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
        </form>
      </>
      )}
    </>
  );
};

export default DriverForm;
