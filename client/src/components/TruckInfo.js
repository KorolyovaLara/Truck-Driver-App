import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_ME, QUERY_TRUCKS } from "../utils/queries";

import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

const TruckInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const trucks = data?.me.trucks || [];
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(trucks);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Truck ID</th>
            <th>Truck Rego</th>
            <th>Truck Model</th>
            <th>Truck Year of Make</th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck._id}>
              <td>{truck._id}</td>
              <td>{truck.rego}</td>
              <td>{truck.model}</td>
              <td>{truck.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckInfo;
