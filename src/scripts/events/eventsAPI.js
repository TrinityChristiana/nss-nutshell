import baseURL from "../server-url.js"

const eventAPI = {
  getEvents(activeUserId) {
    return fetch(
      `${baseURL}events?userId=${activeUserId}`
    ).then(resp => resp.json());
  },
  updateEvent(event) {
    return fetch(`${baseURL}events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  },
  saveEvent(event) {
    return fetch(`${baseURL}events/`, {
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
    fetch(`${baseURL}events/${eventId}`)
      .then(response => response.json())
      .then(event => {
        hiddenEventId.value = event.id;
        nameInput.value = event.name;
        locationInput.value = event.location;
        dateInput.value = event.date;
      });
  },
  deleteEvent(eventId) {
      return fetch(`${baseURL}events/${eventId}`, {
          method: "DELETE"
      }).then(response => response.json());
  }
};

export default eventAPI;
