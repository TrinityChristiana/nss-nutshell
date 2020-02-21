/* Author: Trinity Terry */
/* Purpose: Fetches Data from JSON file for friend articles page*/
import baseURL from "../server-url.js";
const apiManager = {
	getFriends(){
		const userid = sessionStorage.getItem("activeUsers");
		return fetch(`${baseURL}friends?friendUserId=${userid}`)
		.then(resp => resp.json());
	}
};

export default apiManager;
