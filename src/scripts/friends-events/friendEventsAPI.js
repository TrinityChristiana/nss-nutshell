const eventAPI = {
    getFriends(activeUserId) {
      return fetch(
        `https://tct-nutshell.herokuapp.com/friends?friendUserId=${activeUserId}`
      ).then(resp => resp.json());
    },
    getEvents(UserId) {
      return fetch(
        `https://tct-nutshell.herokuapp.com/events?userId=${UserId}`
      ).then(resp => resp.json());
    },
  };
  
  export default eventAPI;
  
