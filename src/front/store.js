import { fetch_vendors } from "./hooks/useGlobalReducer";

export const initialStore = () => {
  return {
    message: null,
    user: {}, 
    access_token: null, 
    foodTrucks: [],
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
        cuisine: "Mexican street food and tacos",
        rating: "4.5 Stars",
        img:"https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrBMONJEn70CGsJqgo0SehO3NYTnhnA0mhzL8kW7Rw12l8SFsUZzZTQukMlgFJLYKVFTiChFhW6UessU-XBNv4zhKbKY-PwQpiFdEEE207Mjxh1e-nXGK23v0bMUq8oSZXVEoA=s1360-w1360-h1020-rw",
      },
      {
        name: "Tamix Mexican Food Truck",
        address: "4817 W Pico Blvd, Los Angeles, CA 90019",
        cuisine: "Specializes in el pastor tacos",
        rating: "4.5 Stars",
        img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5fdBOXrkrI3xZ_QptfGpHzrk5chUI5T-p6SBy-EAt67xUux2QPYCxE6e8Urp2qOfeARRTwSH_nelv0Yko5kGdu47RWCg3MpaKRN-D6tVsOvVvl2RX9f9K5WJTFLIGZGw6JTPUWBU_hh42/w1200-h630-p-k-no-nu/MVIMG_20190917_211205+copy.jpg",
      },
      {
        name: "Los Brothers Food Truck",
        address: "1324 Wilshire Blvd, Los Angeles, CA 90017",
        cuisine: "Mexican and Guatamalan food",
        rating: "5 Stars",
        cuisine: "American",
      },
      {
        name: "Tacos De Valle Al Carbon",
        address: "12402 Washington Pl, Los Angeles, CA 90066",
        cuisine: "Oaxacan food and tacos",
        rating: "4.5 Stars",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5V4cFvf-Y1fTLAHSjqNF9bCVfkV6tO7bemA&s",
      },
      {
        name: "Tacos Como En El D.F. Taco Truck",
        address: "2431 W Washington Blvd, Los Angeles, CA 90018",
        cuisine: "Mexican cuisine",
        rating: "4.5 Stars",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbv60wP94CR5w6UYeoo3rkOiK5lBOtFnypRQg57z2IAQOBEP2jnPFTxNBDtfp5Ngj_U2s&usqp=CAU",
      },
      {
        name: "Chiquis Taco Truck",
        address: "1029 Vine St, Los Angeles, CA 90038",
        cuisine: "Late-night taco truck",
        rating: "4.5 Stars",
        img:"https://s3-media0.fl.yelpcdn.com/bphoto/eR2K2wZ2ARwc0D_SsanRgQ/348s.jpg",
      },
      {
        name: "Bun & Blanket",
        address: "422 Magnolia Ave, Glendale, CA 91204",
        cuisine: "Los Angeles' most popular flavors into fusionend burgers",
        rating: "4.9 Stars",
        img:"https://s3-media0.fl.yelpcdn.com/bphoto/UiZLAR_m_B8lLQlC4pak3A/348s.jpg",
      },
      {
        name: "Birrieria Los Gonzalez - Lunch Truck",
        address: "2524 Maple Ave, Los Angeles, CA 90011",
        cuisine: "Casual Mexican restaurant dishing up tacos, quesadillas, and other standards",
        rating: "4.4 Stars",
        img:"https://s3-media0.fl.yelpcdn.com/bphoto/htHal_L1Sf_N70odcm4_GA/348s.jpg",
      },
      {
        name: "El Flamin Taco - Korea Town",
        address: "505 Vermont Ave, Los Angeles, CA 90020",
        cuisine: "Popular taco truck offering favorites such as al pastor, carne asada, and quesadillas",
        rating: "4.4 Stars",
        img:"https://cdn.corner.inc/place-photo/Aaw_FcJuOldJG4CKwjOuhX9c1P128lVds_TTceuJP7GdmiNkxzpvVur12qIjpfL9I3HjyxD5ePl3NowvyVugUe4AbPcSWVY7T7qzJDLVCAnfaCnY_EBhEGv8_mzDeWRtswcdpbR39SdwzoPIIVtuAla-AriMeFJJfhr330wg6q4GzUY1qE48.jpeg",
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






