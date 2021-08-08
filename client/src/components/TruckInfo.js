import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { QUERY_ME } from "../utils/queries";
import { DELETE_TRUCK } from "../utils/mutations";


const TruckInfo = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const trucks = data?.me.trucks || [];
  if (loading) {
    return (
      <div  className="hero">
        <div className="container">
        <button className="button is-large is-warning is-loading">Loading...</button>
        </div>
      </div>);
  }

  console.log(trucks);

  const [deleteTruck] = useMutation(DELETE_TRUCK);
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDeleteTruck = async (truckId) => {

      try {
        await deleteTruck({
          variables: { _id: truckId },
        });

      } catch (err) {
        console.error(err);
      }
    };

  return (
    <div className="hero">
      <table className="table is-bordered is-striped is-hoverable">
        <thead>
          <tr>
            <th>Truck Rego</th>
            <th>Truck Model</th>
            <th>Model Year</th>
            <th><i className="fas fa-wrench"></i></th>
          </tr>
        </thead>
        <tbody>
          {trucks.map((truck) => (
            <tr key={truck._id}>
              <td>{truck.rego}</td>
              <td>{truck.model}</td>
              <td>{truck.year}</td>
              <td><button className="button is-danger is-outlined"  onClick={() => handleDeleteTruck(truck._id)}><i className="fas fa-trash-alt"></i></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckInfo;
