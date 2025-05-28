import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const RatingPage = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div>
         Rating
        </div>
    );
}; 