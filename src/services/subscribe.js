import axios from "axios";

// const storage = JSON.parse(localStorage.getItem('persist:auth'));
// const { token } = storage;


async function subscribe(email) {

    try {
      const response = await axios.patch(`/subscribe`, {
      "subscription": "subscribe",
      "email": email
      })
      //   , {
      //   headers: {
      //     Authorization: `Bearer ${token.slice(1, -1)}`,
      //   },
      // });
        
    return response;

    }
    catch (error) {
        console.log(error.message);
         return error;
     }
};

export default subscribe;



