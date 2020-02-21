import baseURL from "../server-url.js"


const eventAPI = {
    getFriends(activeUserId) {
      return fetch(
        `${baseURL}friends?friendUserId=${activeUserId}`
      ).then(resp => resp.json());
    },
    getEvents(UserId) {
      return fetch(
        `${baseURL}events?userId=${UserId}`
      ).then(resp => resp.json());
    },
  };
  
  export default eventAPI;
  
