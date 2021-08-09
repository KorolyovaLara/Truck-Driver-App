import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Auth from "../utils/auth";
import { SAVE_RUNSHEET } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

const SummaryForm = () => {

    const { loading, data } = useQuery(QUERY_ME);

    const driverInformation = data?.me.driver || [];
    const driverRunsheet = data?.me.savedRunsheets || []; 

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
            <h1 className="title"> Runsheets Summary</h1>
          <table className="table is-bordered is-striped is-hoverable is-narrow">
            <thead>
              <tr>
                <th>Date</th>
                <th>Start Time</th>
                <th>Finish Time</th>
                <th>Start Odometer</th>
                <th>Finish Odometer</th>
                <th><i className="fas fa-wrench"></i></th>
              </tr>
            </thead>
            <tbody>
              {driverRunsheet.map((runsheet) => (
                <tr key={runsheet._id}>
                  <td>{runsheet.date}</td>
                  <td>{runsheet.startTime}</td>
                  <td>{runsheet.finishTime}</td>
                  <td>{runsheet.startOdometer}</td>
                  <td>{runsheet.finishOdometer}</td>
                  <td><button className="button is-danger is-outlined"  onClick={() => handleDeleteTruck(runsheet._id)}><i className="fas fa-trash-alt"></i></button></td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>

        </div>
      );
    };

export default SummaryForm;