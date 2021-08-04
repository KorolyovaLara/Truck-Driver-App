import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";
import DriverForm from "../components/DriverForm";
import DriverInfo from "../components/DriverInfo";

const Profile = () => {
  const { loading } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="card-header">YOUR PROFILE</h2>
      <DriverInfo />
      <DriverForm />
    </div>
  );
};

export default Profile;
