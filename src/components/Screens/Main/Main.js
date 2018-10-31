import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
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
                    <Row className="global-logo">
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <img width="100" height="100" src={'../../../assets/img/react-logo.png'} />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <img width="100" height="100" src={'../../../assets/img/redux-logo.png'} />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
                            <img width="100" height="100" src={'../../../assets/img/firebase-logo.png'} />
                        </Col>                        
                    </Row>
                    <div className="global-title">
                        React Starter
                    </div>
                    <div className="global-subtitle">
                        A simple React boilerplate with Redux and Firebase integration.
                    </div>
                    <div className="get-started-div">
                        <Button onClick={ () => this.setState({ getStarted: true }) } color="secondary">Get started!</Button>
                    </div>
                 </div>
            );
        }
    }

}

export default Main;