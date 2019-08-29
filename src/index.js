import React from 'react'
// import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store'
import * as serviceWorker from './serviceWorker'
// sagaMiddleware.run(rootSaga)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)

serviceWorker.unregister()