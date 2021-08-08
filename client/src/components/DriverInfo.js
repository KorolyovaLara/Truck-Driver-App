import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { QUERY_ME } from "../utils/queries";

const DriverInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const driverData = data?.me.driver || {};
  const userData = data?.me || {};

  console.log("driver data", driverData);

  // if data isn't here yet, say so
  if (loading) {
    return (
      <div  className="hero">
        <div className="container">
        <button className="button is-large is-warning is-loading">Loading...</button>
        </div>
      </div>);
  }

  return (
  <>
    <div className="level ">
      <div className="level-item">
        <div className="content">
          <p className="subtitle is-6">First Name</p>
          <p className="title is-4">{driverData.firstName}</p>
        </div>
      </div>
      <div className="level-item">
        <div className="content">
          <p className="subtitle is-6">Last Name</p>
          <p className="title is-4">{driverData.lastName}</p>
        </div>
      </div>
    </div>
    <div className="level">
      <div className="level-item">
        <div className="content">
          <p className="subtitle is-6">Email</p>
          <p className="title is-4">{userData.email}</p>
        </div>
      </div>
      <div className="level-item">
        <div className="content">
          <p className="subtitle is-6">Company Name</p>
          <p className="title is-4">{driverData.companyName}</p>
        </div>
      </div>
    </div>
    <div className="level">
      <div className="level-item">
        <div className="content">
          <p className="subtitle is-6">Phone Number</p>
          <p className="title is-4">{driverData.phoneNumber}</p>
        </div>
      </div>
      <div className="level-item">
        <div className="content">
          <p className="subtitle is-6">Driver Licence</p>
          <p className="title is-4">{driverData.driverLicence}</p>
        </div>
      </div>   
    </div>  
  </>
  );
};

export default DriverInfo;
