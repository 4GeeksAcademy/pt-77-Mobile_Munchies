export const initialStore = () => {
  return {
    message: null,
    foodTrucks: [
      {
        name: "Sunset Smash",
        address: "11941 San Vicente Blvd, Los Angeles, CA 90049",
        calendly_url: "https://calendly.com/evens7antoine/30min",
        id:1
      },
      {
        name: "Leo's Tacos Truck",
        address: "1515 S La Brea Ave, Los Angeles, CA 90019",
      },
      {
        name: "Tamix Mexican Food Truck",
        address: "4817 W Pico Blvd, Los Angeles, CA 90019",
      },
      {
        name: "Los Brothers Food Truck",
        address: "1324 Wilshire Blvd, Los Angeles, CA 90017",
        rating: "5 Stars",
        cuisine: "American",
      },
      {
        name: "Tacos De Valle Al Carbon",
        address: "12402 Washington Pl, Los Angeles, CA 90066",
      },
      {
        name: "Tacos Como En El D.F. Taco Truck",
        address: "2431 W Washington Blvd, Los Angeles, CA 90018",
      },
      {
        name: "Chiquis Taco Truck",
        address: "1029 Vine St, Los Angeles, CA 90038",
      },
      {
        name: "Bun & Blanket",
        address: "422 Magnolia Ave, Glendale, CA 91204",
      },
      {
        name: "Birrieria Los Gonzalez - Lunch Truck",
        address: "2524 Maple Ave, Los Angeles, CA 90011",
      },
      {
        name: "El Flamin Taco - Korea Town",
        address: "505 Vermont Ave, Los Angeles, CA 90020",
      },
    ],
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
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
    default:
      throw Error("Unknown action.");
  }
}
