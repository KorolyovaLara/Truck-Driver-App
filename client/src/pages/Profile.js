import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import DriverForm from "../components/DriverForm";
import DriverInfo from "../components/DriverInfo";
import TruckForm from "../components/TruckForm";
import TruckInfo from "../components/TruckInfo";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  //const driver = user.driver;
  //const truck = user.trucks;

  console.log("main", user);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>YOUR = {user.name} = PROFILE</h2>
      <p1>{user.email}</p1>
      <p1>{user.fullname}</p1>
      <div>
        <DriverInfo />
        <DriverForm />
      </div>
      <br></br>
      <div>
        <TruckForm />
        <TruckInfo />
      </div>
    </div>
  );
};

export default Profile;
