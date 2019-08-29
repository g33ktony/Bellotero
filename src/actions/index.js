const SET_DATA = 'SET_DATA'
const SET_ALERT_DATA = 'SET_ALERT_DATA'
const SET_NAV_DATA = 'SET_NAV_DATA'

export function setData(payload, page) {
	return { 
		type: SET_DATA,
		payload,
		page
	}
}

export function setAlert(payload) {
	return { 
		type: SET_ALERT_DATA,
		payload,
	}
}

export function setNav(payload) {
	return { 
		type: SET_NAV_DATA,
		payload,
	}
}