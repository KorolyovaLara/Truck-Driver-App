import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_TRUCK } from "../utils/mutations";
import Auth from "../utils/auth";

const TruckForm = () => {
  const [truckState, setTruckState] = useState({
    rego: "",
    model: "",
    year: "",
  });
  const [saveTruck] = useMutation(SAVE_TRUCK);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTruckState({
      ...truckState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await saveTruck({
        variables: {
          ...truckState,
          truckDriver: Auth.getProfile().data.name,
        },
      });
      console.log("entrydata ===>", data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          placeholder="Rego"
          name="rego"
          type="text"
          value={truckState.rego}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Model"
          name="model"
          type="text"
          value={truckState.model}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Year"
          name="year"
          type="number"
          value={truckState.year}
          onChange={handleChange}
        />

        <button style={{ cursor: "pointer" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TruckForm;
