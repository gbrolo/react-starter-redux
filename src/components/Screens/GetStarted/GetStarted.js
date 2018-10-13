import React, { Component } from 'react';
import '../../../styles/global.scss';

class GetStarted extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="global-logo">
                    <img width="100" height="100" src={'../../../assets/img/react-logo.png'} />
                </div>
                <div className="global-title">
                    React Starter v 2.0.0
                </div>
                <div className="global-subtitle">
                    Lets get started and create some cool apps!
                </div>
             </div>
        );
    }

}

export default GetStarted;