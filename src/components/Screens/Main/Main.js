import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import '../../../styles/global.scss';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            getStarted: false
        }
    }

    render() {
        if (this.state.getStarted) {
            return (
                <Redirect to='/info' push />
            );
        } else {
            return (
                <div className="wrapper">
                    <div className="global-logo">
                        <img width="100" height="100" src={'../../../assets/img/react-logo.png'} />
                    </div>
                    <div className="global-title">
                        React Starter
                    </div>
                    <div className="global-subtitle">
                        A simple React boilerplate made with Webpack 4 and Babel 5.6
                    </div>
                    <div className="get-started-div">
                        <Button onClick={ () => this.setState({ getStarted: true }) } outline color="success">Get started!</Button>
                    </div>
                 </div>
            );
        }
    }

}

export default Main;