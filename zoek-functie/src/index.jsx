import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import filteredGamesReducer from "./reducers/filteredGamesReducer"
import App from './app/App'

const store = createStore(filteredGamesReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
