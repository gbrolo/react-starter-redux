import React, { Component } from 'react';
import '../../../styles/global.scss';

class NotFound extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="global-logo">
                    <img width="100" height="100" src={'../../../assets/img/react-logo.png'} />
                </div>
                <div className="global-title">
                    Page Not Found!
                </div>
                <div className="global-subtitle">
                    The page you requested for does not exist!
                </div>
             </div>
        );
    }

}

export default NotFound;