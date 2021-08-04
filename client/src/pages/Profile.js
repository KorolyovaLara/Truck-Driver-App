import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ME } from "../utils/queries";

const Profile = () => {
  const { loading } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="card-header">YOUR PROFILE</h2>
    </div>
  );
};

export default Profile;
