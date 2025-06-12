// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    // Provide the store and dispatch method to all child components.
    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store };
}

// actions
const VENDOR_SIGNIN_START= "VENDOR_SIGNIN_START"
const FETCH_VENDORS_START= "FETCH_VENDORS_START"
export const vendorSignIn= async(dispatch, email, password) => {
    const response= await fetch(`${import.meta.env.VITE_BACKEND_URL}/vendor/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email, password
        })
    })
    const result= await response.json()
        
    if (response.ok){
        sessionStorage.setItem("vendorToken", result.access_token)
        return {success:true, result}
    } else {
        return{success:false, error:result.msg}
    }

}
export const fetch_vendors= async(dispatch) => {
    console.log(import.meta.env.VITE_BACKEND_URL)
    const response= await fetch(`${import.meta.env.VITE_BACKEND_URL}/vendors`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    const result= await response.json()

    if (response.ok){
        dispatch({type: FETCH_VENDORS_START, payload: result})
        return {success:true, vendors: result}
    } else {
        return{success:false, error:result.msg}
    } 

}