import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import MapVisual from "../components/MapVisual.jsx";
import { fetch_vendors } from "../hooks/useGlobalReducer";

export const GoogleMapTest = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        fetch_vendors(dispatch)
    }, [])

    return (
        <div className="container">
            <h1>Google Map Test</h1>
            <div className="text-center mt-5">

                {store.foodTrucks?.map((truck, index) => (
                    <div className="d-flex row mt-3" key={index}>
                        <div className="col-3">
                            <img src="https://picsum.photos/200"/>
                        </div>
                        <div className="d-flex col-6 row">
                            <div className="col-6">
                                <h2>{truck.name}</h2>
                                <h4>{truck.address}</h4>
                                <h4>{truck.price}</h4>
                            </div>
                            <div className="col-6">
                                <div></div>
                                <Link to={`/calendlypages/${truck.id}`}>Book Now!</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <MapVisual
                            FoodTruckName={truck.name}
                            address={truck.address}
                        />
                        </div>
                        
                        
                    

                        
                    </div>

                    

                ))}

                
            </div>
        </div>
    );
};
