import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
export const VendorDashboard=()=>{
    const { store, dispatch } = useGlobalReducer()
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>{store.user.title}</h3>
        </div>

    )

}