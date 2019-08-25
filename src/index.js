import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { logger } from 'redux-logger'
import App from './App'
import './index.css'
import rootSaga from './sagas'
import * as serviceWorker from './serviceWorker'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(sagaMiddleware, thunk, logger)
	),
	
)

sagaMiddleware.run(rootSaga)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)

serviceWorker.unregister()