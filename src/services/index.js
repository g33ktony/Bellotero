import axios from '../config/axios'

export function getData(page){

	const config = {
		method: 'get',
		url: `page${page}.json`
	}

	return axios(config)
}

export function getNavData() {
	const config = {
		method: 'get',
		url: 'app.json'
	}

	return axios(config)
}