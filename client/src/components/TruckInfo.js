import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { QUERY_ME } from "../utils/queries";


const TruckInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const trucks = data?.me.trucks || [];
  if (loading) {
    return (
      <div  className="hero">
        <div className="container">
        <button className="button is-large is-warning is-loading">Loading...</button>
        </div>
      </div>);
  }

  console.log(trucks);
  return (
    <div className="hero">
      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th>Truck Rego</th>
            <th>Truck Model</th>
            <th>Model Year</th>
            <th><i className="fas fa-wrench"></i></th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck._id}>
              <td>{truck.rego}</td>
              <td>{truck.model}</td>
              <td>{truck.year}</td>
              <td><button className="button is-danger is-outlined"><i className="fas fa-trash-alt"></i></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckInfo;
