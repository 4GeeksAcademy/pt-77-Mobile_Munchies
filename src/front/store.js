export const initialStore=()=>{
  return{
    message: null,
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
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
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

