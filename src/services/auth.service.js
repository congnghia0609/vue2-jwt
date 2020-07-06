import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

class AuthService {
	login(user) {
		return axios.post(API_URL + 'token', {
			email: user.email,
			password: user.password
		}).then(res => {
			if(res.data.user.token) {
				localStorage.setItem('user', JSON.stringify(res.data.user))
			}
			return res.data.user;
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
			password: user.password,
			repassword: user.repassword
		});
	}
}

export default new AuthService();
