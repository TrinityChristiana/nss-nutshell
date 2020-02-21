/* Author: Trinity Terry */
/* Purpose: Fetches Data from JSON file for article page*/
import baseURL from "../server-url.js";

const apiManager = {
	getUserNews(userId) {
		return fetch(

			`${baseURL}news?userId=${userId}`

		).then(resp => resp.json());
	},
	getSiteUrl(query) {
		return fetch(`https://source.unsplash.com/collection/${query}`)
		
	},
	addUserNews(newsObj) {
		return fetch('${baseURL}news', {
			// Replace "url" with your API's URL
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newsObj)
		});
	},
	deleteUserNews(id) {
		return fetch(`${baseURL}news/${id}`, {
			// Replace "url" with your API's URL
			method: 'DELETE'
		});
	},
	getSingleNews(id) {
		const activeUserId = sessionStorage.getItem("activeUsers");
		return fetch(
			`${baseURL}news?userId=${activeUserId}&&id=${id}`
		).then(resp => resp.json());
	},
	editUserNews(id, newsObj) {
		return fetch(
			`${baseURL}news/${id}`,
			{
				method: `PUT`,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newsObj)
			}
		);
	},
	getArticleAPI(){
		return fetch(`${baseURL}apiKeys/1`)
		.then(resp => resp.json());
	}
};

export default apiManager;
