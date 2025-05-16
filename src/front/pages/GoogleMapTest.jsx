import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import MapVisual from "../components/MapVisual.jsx";

export const GoogleMapTest = () => {
    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()

    const foodTrucks = [
        {
            name: "The Rolling Taco",
            address: "123 Main St, Austin, TX 78701"
        },
        {
            name: "Burger Bus",
            address: "456 Elm St, Denver, CO 80220"
        },
        {
            name: "Curry Cruiser",
            address: "789 Oak Ave, San Jose, CA 95110"
        }
    ];

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

                {/* <MapVisual/> */}
                <MapVisual
                    FoodTruckName="The Baconator"
                    address="1600 Amphitheatre Parkway, Mountain View, CA"
                />
                <MapVisual
                    FoodTruckName="The Silent Killer"
                    address="10600 Okeechobee Blvd, West Palm Beach, FL"
                />
                <MapVisual
                    FoodTruckName="The Roadhouse"
                    address="21699-A FL-7, Boca Raton, FL 33428"
                />

                {foodTrucks?.map((truck, index) => (
                    <div key={index}>
                        <MapVisual
                            FoodTruckName={truck.name}
                            address={truck.address}
                        />
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
