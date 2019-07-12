import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';
import indexReducer from './indexReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(indexReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

