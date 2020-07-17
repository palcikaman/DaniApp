import axios from 'axios';

const instance = axios.create({
	baseURL: "http://swapi.dev/api/",
	timeout: 30000,
});

export default instance;
