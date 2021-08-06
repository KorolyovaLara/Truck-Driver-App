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

  console.log("main", user);
  if (loading) {
    return <div class="tag is-warning">Loading...</div>;
  }

  return (
    <div class="container has-text-centered">
      <section class="section">
        <h1 class="title">Welcome, {user.name} !</h1>
      </section>

      <section class="section">
        <DriverInfo />
        <br></br>
        <DriverForm />
      </section>
      <br></br>
      <section class="section">
        <TruckForm />
        <br></br>
        <TruckInfo />
      </section>
    </div>
  );
};

export default Profile;
