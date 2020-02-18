const apiManager = {
	getUserNews() {
		const activeUserId = sessionStorage.getItem("activeUsers");
		return fetch(
			`https://tct-nutshell.herokuapp.com/news?userId=${activeUserId}`
		).then(resp => resp.json());
	},
	getSiteUrl() {
		return fetch(`https://source.unsplash.com/collection/8833779/300x300`)
		
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
	}
};

export default apiManager;
