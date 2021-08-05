import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const DriverInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const driverData = data?.me.driver || {};

  console.log("driver data", driverData);

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name </th>
              <th>Company Name </th>
              <th>Phone Number </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{driverData.firstName}</td>
              <td>{driverData.lastName}</td>
              <td>{driverData.companyName}</td>
              <td>{driverData.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DriverInfo;
