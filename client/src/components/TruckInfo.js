import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_ME, QUERY_TRUCKS } from "../utils/queries";

import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

const TruckInfo = () => {
  const { truckDriver: userParam } = useParams;
  const { loading, data } = useQuery(userParam ? QUERY_TRUCKS : QUERY_ME, {
    variables: { truckDriver: userParam },
  });
  console.log("userParam =>", userParam);
  const truck = data?.trucks;

  if (Auth.loggedIn() && Auth.getProfile().data.name === userParam) {
    return <div>See your Trucks below</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Truck ID</th>
            <td>{truck}</td>
          </tr>
          <tr>
            <th>Truck Rego</th>
            <td>{truck}</td>
          </tr>
          <tr>
            <th>Truck Model</th>
            <td>{truck}</td>
          </tr>
          <tr>
            <th>Truck Year of Make</th>
            <td>{truck}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TruckInfo;
