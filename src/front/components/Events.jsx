import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Events = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div>
         Events
        </div>
    );
}; 