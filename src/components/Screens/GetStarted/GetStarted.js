import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import { addObjectToCollection, getItemsIn } from '../../../firebase/CollectionProvider/CollectionProvider';
import '../../../styles/global.scss';

class GetStarted extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            names: []
        }
    }

    componentDidMount() {
        this.getNames();
    }

    getNames() {
        getItemsIn('names').then(names => {
            this.setState({ names });
        })
    }

    addItem() {
        let { name } = this.state;
        let item = { name }
        console.log('item', item);
        addObjectToCollection('names', item);
        this.getNames();
    }

    render() {
        const { names } = this.state;

        return (
            <div className="wrapper roboto-font">
                <p className="instructions">Write your name:</p>
                <div className="input-container">
                    <Input 
                        className="input" 
                        type="text" 
                        name="user_name" 
                        id="user_name" 
                        placeholder="Write your name here!"
                        onChange={(event) => this.setState({ name: event.target.value })} />
                    <Button onClick={ () => this.addItem() } color="secondary">Add!</Button>
                </div>
                <p className="instructions">Name list:</p>

                {
                    names.map((name, index) => {
                        return(
                            <div key={ index }>
                                <Row>
                                    <Col>
                                        { name.name }
                                    </Col>
                                </Row>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

}

export default GetStarted;