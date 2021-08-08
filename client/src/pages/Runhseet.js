import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Auth from "../utils/auth";
import { SAVE_RUNSHEET } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

const RunsheetForm = () => {
    const [runsheetForm, setRunsheetForm] = useState({
        date: "",
        startTime: "",
        finishTime: "",
        startOdometer: "",
        finishOdometer: "",
    })
  
    const [saveRunsheet] = useMutation(SAVE_RUNSHEET);

    const { loading, data } = useQuery(QUERY_ME);
    const driverInformation = data?.me.driver || [];
    const truckInformation = data?.me.trucks || [];

    if (loading) {
        return (
          <div  className="hero">
            <div className="container">
            <button className="button is-large is-warning is-loading">Loading...</button>
            </div>
          </div>);
      }
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setRunsheetForm({ ...runsheetForm, [name]: value });
    };

    const handleRunsheetSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await saveRunsheet({
            variables: { dataRunsheet: { ...runsheetForm } },
          });
          window.location.reload();
          console.log("data", data);

        } catch (err) {
          console.log(err);
        }
    };
    
    return (
        <>
        <div className="hero-main has-text-centered">
        <div className="title">RUNSHEET</div> 

        </div>
        </>
    ); 
}

    export default RunsheetForm;