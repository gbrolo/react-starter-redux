import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import starter from './reducers';
import App from "./components/App.js";

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
    starter,
    applyMiddleware(thunk)
);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ), document.getElementById("app-entry-point")
);