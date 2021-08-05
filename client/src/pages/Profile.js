import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import DriverForm from "../components/DriverForm";
import DriverInfo from "../components/DriverInfo";
import TruckForm from "../components/TruckForm";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="card-header">YOUR = {user.name} = PROFILE</h2>
      <div>
        <DriverInfo />
        <DriverForm />
      </div>
      <br></br>
      <div>
        <TruckForm />
      </div>
    </div>
  );
};

export default Profile;
