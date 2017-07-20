import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unauthUser } from '../../actions';

class Signout extends Component {

    componentWillMount() {
        this.props.unauthUser();
    }
    
    render() {
        return(
            <div>
                <h1>Come back latter...</h1>
            </div>
        )
    }
}

export default connect(null, { unauthUser })(Signout);