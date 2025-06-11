import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.
import MapVisual from "../components/MapVisual.jsx";
import { fetch_vendors } from "../hooks/useGlobalReducer";

export const GoogleMapTest = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch_vendors(dispatch);
  }, []);

  return (
    <div className="container custom-background">
      <div className="text-center mt-5">
        {store.foodTrucks?.map((truck, index) => (
          <div className="d-flex row mt-3" key={index}>
            <div className="col-3">
              <img
                src={truck.img}
                style={{
                  width: "200px",
                  height: "150px",
                  objectFit: "cover",
                  paddingTop: "10px",
                }}
              />
            </div>
            <div className="d-flex col-6 row">
              <div className="col-6 text-white">
                <h2>{truck.name}</h2>
                <h2>{truck.title}</h2>
                <p>{truck.address}</p>
                <h6>{truck.cuisine}</h6>
                <h4>{truck.rating}</h4>
              </div>
              <div className="col-6" style={{ paddingTop: "10px" }}>
                <Link
                  className="btn btn-danger"
                  to={`/calendlypages/${truck.id}`}
                >
                  Book Now!
                </Link>
              </div>
            </div>
            <div className="col-3">
              <MapVisual FoodTruckName={truck.name} address={truck.address} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
