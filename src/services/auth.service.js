import axios from "axios";

const API_URL = 'http://localhost:8787/api/v1/';

class AuthService {
	login(user) {
		return axios.post(API_URL + 'token', {
			username: user.username,
			password: user.password
		}).then(res => {
			if(res.data.token) {
				localStorage.setItem('user', JSON.stringify(res.data))
			}
			return res.data;
		}).catch(e => {
			console.log(e);
		})
	}

	logout() {
		localStorage.removeItem('user');
	}

	register(user) {
		return axios.post(API_URL + 'signup', {
			username: user.username,
			email: user.email,
			password: user.password
		});
	}
}

export default new AuthService();
