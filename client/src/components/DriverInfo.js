import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME } from "../utils/queries";

const DriverInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const driverData = data?.me.driver || {};

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{driverData.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{driverData.lastName}</td>
            </tr>
            <tr>
              <th>Company Name</th>
              <td>{driverData.companyName}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{driverData.phoneNumber}</td>
            </tr>
            <tr>
              <th>License Number</th>
              <td>{driverData.driverLicence}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DriverInfo;
