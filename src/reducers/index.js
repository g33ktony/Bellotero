const reducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				pageData: {
					...action.payload,
					page: action.page
				}
			};
		case 'SET_ALERT_DATA':
			return {
				...state,
				alertData: action.payload
			}
		case 'SET_NAV_DATA':
			return {
				...state,
				navData: action.payload
			}
		default:
			return state
	}
};
export default reducer