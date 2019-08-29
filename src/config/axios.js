import axios from 'axios'

const baseURL = 'https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/'

const instance = axios.create({
	baseURL,
	timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' }
});

export default instance