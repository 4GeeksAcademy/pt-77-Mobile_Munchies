export const initialStore = () => {
  return {
    message: null,
    foodTrucks: [
      {
        name: "Sunset Smash",
        address: "11941 San Vicente Blvd, Los Angeles, CA 90049",
        cuisine: "American comfort food, burgers, and sandwiches",
        rating: "4.8 Stars",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sKspFDNViqDBCtANWOx4Jmo-YkCXQCMkVw&s",
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
        img:"https://s3-media0.fl.yelpcdn.com/bphoto/-4INPXjgHpcNYkZuLNRBJg/l.jpg",
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
    default:
      throw Error("Unknown action.");
  }
}




// (email,password) => {
//     const opts = {
// 			method: 'POST',
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				"email": email,
// 				"password": password
// 			})
// 	};

//     try{
//         const resp =await fetch('https://miniature-zebra-g4rrw6gx4xw6c9j7r-3001.app.github.dev/api/token', opts)	
//         if (resp.status !== 200){
//                 alert("There has been some error");
//                 return false;
//         }
        
//         const data = await resp.json();
//         console.log("this came from the backend", data)
//         sessionStorage.setItem("token", data.access_token);
//         setStore
//         return true;
//     }
//     catch(error){
//         console.log("There was an error logging in");
//     }
// }

// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			// your state properties here
// 		},
// 		actions: {
// 			Login: async (email, password) => {
// 				const opts = {
// 					method: 'POST',
// 					headers: {
// 						"Content-Type": "application/json"
// 					},
// 					body: JSON.stringify({
// 						email: email,
// 						password: password
// 					})
// 				};

// 				try {
// 					const resp = await fetch('https://miniature-zebra-g4rrw6gx4xw6c9j7r-3001.app.github.dev/api/token', opts);

// 					if (resp.status !== 200) {
// 						alert("There has been some error");
// 						return false;
// 					}

// 					const data = await resp.json();
// 					console.log("this came from the backend", data);
// 					sessionStorage.setItem("token", data.access_token);

				
// 					setStore({ token: data.access_token });

// 					return true;
// 				} catch (error) {
// 					console.error("There was an error logging in:", error);
// 					return false;
// 				}
// 			}
// 		}
// 	};
// };

