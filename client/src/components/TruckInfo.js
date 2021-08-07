import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { QUERY_ME } from "../utils/queries";


const TruckInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const trucks = data?.me.trucks || [];
  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(trucks);
  return (
    <div class="table is-bordered is-striped is-narrow is-hoverable">
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
