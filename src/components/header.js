import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    renderMenu() {
        if(this.props.authenticated) {
            return [
                <li key={1}><Link to="/signout">Sign out</Link></li>
            ];
        }

        return [
            <li key={1}><Link to="/signin">Sign in</Link></li>
        ];
    }
    
    render() {
        return(
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    { this.renderMenu() }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Header);