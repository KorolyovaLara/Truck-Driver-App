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
    return <h2>LOADING...</h2>;
  }

  return (
<>
    <div class="level ">
      <div class="level-item has-text-centered">
        <div class="content">
          <p class="subtitle is-6">First Name</p>
          <p class="title is-4">{driverData.firstName}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="content">
          <p class="subtitle is-6">Last Name</p>
          <p class="title is-4">{driverData.lastName}</p>
        </div>
      </div>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <div class="content">
          <p class="subtitle is-6">Email</p>
          <p class="title is-4">{userData.email}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="content">
          <p class="subtitle is-6">Company Name</p>
          <p class="title is-4">{driverData.companyName}</p>
        </div>
      </div>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <div class="content">
          <p class="subtitle is-6">Phone Number</p>
          <p class="title is-4">{driverData.phoneNumber}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div class="content">
          <p class="subtitle is-6">Driver Licence</p>
          <p class="title is-4">{driverData.driverLicence}</p>
        </div>
      </div>   
    </div>  
</>
  );
};

export default DriverInfo;
