/* Author: Trinity Terry */
/* Purpose: Fetches Data from JSON file for article page*/

const apiManager = {
	getUserNews(userId) {
		return fetch(

			`https://tct-nutshell.herokuapp.com/news?userId=${userId}`

		).then(resp => resp.json());
	},
	getSiteUrl(query) {
		return fetch(`https://source.unsplash.com/collection/${query}`)
		
	},
	addUserNews(newsObj) {
		return fetch('https://tct-nutshell.herokuapp.com/news', {
			// Replace "url" with your API's URL
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newsObj)
		});
	},
	deleteUserNews(id) {
		return fetch(`https://tct-nutshell.herokuapp.com/news/${id}`, {
			// Replace "url" with your API's URL
			method: 'DELETE'
		});
	},
	getSingleNews(id) {
		const activeUserId = sessionStorage.getItem("activeUsers");
		return fetch(
			`https://tct-nutshell.herokuapp.com/news?userId=${activeUserId}&&id=${id}`
		).then(resp => resp.json());
	},
	editUserNews(id, newsObj) {
		return fetch(
			`https://tct-nutshell.herokuapp.com/news/${id}`,
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
		return fetch(`https://tct-nutshell.herokuapp.com/apiKeys/1`)
		.then(resp => resp.json());
	}
};

export default apiManager;
