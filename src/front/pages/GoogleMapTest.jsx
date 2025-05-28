import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import MapVisual from "../components/MapVisual.jsx";

export const GoogleMapTest = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()



    const loadMessage = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL

            if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

            const response = await fetch(backendUrl + "/api/hello")
            const data = await response.json()

            if (response.ok) dispatch({ type: "set_hello", payload: data.message })

            return data

        } catch (error) {
            if (error.message) throw new Error(
                `Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
            );
        }

    }

    useEffect(() => {
        loadMessage()
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
                                <button>Book Now!</button>
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

                <div className="alert alert-info">
                    {store.message ? (
                        <span>{store.message}</span>
                    ) : (
                        <span className="text-danger">
                            Loading message from the backend (make sure your python 🐍 backend is running)...
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};
