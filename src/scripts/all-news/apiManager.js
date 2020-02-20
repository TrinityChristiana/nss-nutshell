/* Author: Trinity Terry */
/* Purpose: Fetches Data from JSON file for friend articles page*/

const apiManager = {
	getFriends(){
		const userid = sessionStorage.getItem("activeUsers");
		return fetch(`https://tct-nutshell.herokuapp.com/friends?friendUserId=${userid}`)
		.then(resp => resp.json());
	}
};

export default apiManager;
