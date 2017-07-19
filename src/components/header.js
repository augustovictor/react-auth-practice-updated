import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    renderMenu() {
        if(localStorage.getItem('token')) {
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



export default connect(null)(Header);