import App from './containers/App';
import React from 'react';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';

const store = createStore(
  rootReducer,
);

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(root, document.getElementById('root'));
