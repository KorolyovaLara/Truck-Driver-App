import React from "react";
import { useQuery } from "@apollo/react-hooks";

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
    return (
      <div  className="hero">
        <div className="container">
        <button className="button is-large is-warning is-loading">Loading...</button>
        </div>
      </div>);
  }

  return (
    <div className="hero has-text-centered">
      <div className="container">
        <div className="title">Welcome, {user.name}!</div>
      </div>
      <br></br>
      <div className="columns">
        <DriverInfo />
        </div>
      <div className="container">     
        <br></br>
        <DriverForm />
      </div>
      <br></br>
      <div className="container">        
        <TruckForm /> 
        <br></br>
        <TruckInfo />
      </div>



        <br></br>
    </div>
  );
};

export default Profile;
