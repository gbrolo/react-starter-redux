import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import starter from './reducers';
import App from "./components/App.js";

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(starter);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ), document.getElementById("app-entry-point")
);