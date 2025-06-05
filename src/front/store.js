import { fetch_vendors } from "./hooks/useGlobalReducer";

export const initialStore = () => {
  return {
    message: null,
    user: {}, 
    access_token: null, 
    foodTrucks: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };
      case "FETCH_VENDORS_START":
        return {
          ...store,
          foodTrucks: action.payload
        }
      case "VENDOR_SIGNIN_START":
        const { vendor, access_token } = action.payload;
        console.log("dispatch successful")
        return {...store,
          user: vendor,
          access_token: access_token
        }
    default:
      throw Error("Unknown action.");
  }
}






