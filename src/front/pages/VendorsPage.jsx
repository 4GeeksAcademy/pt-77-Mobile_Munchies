// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; // Custom hook for accessing the global state.
import { useEffect, useState } from "react";
import { MapVisual } from "../components/MapVisual";
import { fetch_vendors } from "../hooks/useGlobalReducer";

export const VendorsPage = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    loadVendors();
  }, []);
  const loadVendors = async () => {
    const result = await fetch_vendors(dispatch);
    if (result.success) {
      setVendors(result.vendors);
    } else {
      alert("Vendors are not loading correctly");
    }
  };

  return (
    <div className="container">
      <h1>hello</h1>
      {vendors?.map((vendor, index) => (
        <div key={index}>
          <MapVisual FoodTruckName={vendor.name} address={vendor.address} />
        </div>
      ))}
    </div>
  );
};
