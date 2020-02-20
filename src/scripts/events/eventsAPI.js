const eventAPI = {
  getEvents(activeUserId) {
    return fetch(
      `https://tct-nutshell.herokuapp.com/events?userId=${activeUserId}`
    ).then(resp => resp.json());
  },
  updateEvent(event) {
    return fetch(`https://tct-nutshell.herokuapp.com/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  },
  saveEvent(event) {
    return fetch(`https://tct-nutshell.herokuapp.com/events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  },
  refillEvent(eventId) {
    const hiddenEventId = document.querySelector("#eventId");
    const nameInput = document.querySelector("#nameInput");
    const locationInput = document.querySelector("#locationInput");
    const dateInput = document.querySelector("#dateInput");
    fetch(`https://tct-nutshell.herokuapp.com/events/${eventId}`)
      .then(response => response.json())
      .then(event => {
        hiddenEventId.value = event.id;
        nameInput.value = event.name;
        locationInput.value = event.location;
        dateInput.value = event.date;
      });
  },
  deleteEvent(eventId) {
      return fetch(`https://tct-nutshell.herokuapp.com/events/${eventId}`, {
          method: "DELETE"
      }).then(response => response.json());
  }
};

export default eventAPI;
