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
      <div>
        <table>
          <thead>Your Details</thead>
          <tr>
            <th>First Name</th>
            <td>Smith</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>Jackson</td>
          </tr>
          <tr>
            <th>Company Name</th>
            <td>Jackson</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>Jackson</td>
          </tr>
          <tr>
            <th>License Number</th>
            <td>Jackson</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Profile;
