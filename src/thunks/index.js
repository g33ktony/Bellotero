import { getData, getNavData } from '../services'
import { setData, setAlert, setNav } from '../actions'

export function setPageData(page) {
	return function (dispatch) {
		return getData(page)
			.then(
				res => dispatch(setData(res.data, page)),
				error => dispatch(setAlert({ message: 'No se pudo obtener datos de página', error }))
			)
	}
}

export function setNavData() {
	return function (dispatch) {
		return getNavData()
			.then(
				res => dispatch(setNav(res.data)),
				error => dispatch(setAlert({ message: 'No se pudo obtener datos de nav', error }))
			)
	}
}