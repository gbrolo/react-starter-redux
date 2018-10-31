/*
 *  Main App entry
 *  @author: gbrolo
 *  
 */

 import React, { Component } from 'react';
 import { Switch, Route } from 'react-router-dom';
 import '../styles/global.scss';
 import Main from './Screens/Main/Main';
 import GetStarted from './Screens/GetStarted/GetStarted';
 import NotFound from './Screens/NotFound/NotFound';

 class App extends Component {
     render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/demo" component={GetStarted} />
                <Route component={NotFound} />
            </Switch>
        );
     }
 }

 export default App;