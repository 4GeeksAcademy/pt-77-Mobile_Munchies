import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Trucks = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div>
         Trucks
        </div>
    );
}; 