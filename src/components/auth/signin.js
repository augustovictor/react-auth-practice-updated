import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authUser } from '../../actions';
import { AUTH_MESSAGE } from '../../actions/types';

class Signin extends Component {

    componentWillMount() {
        if(localStorage.getItem('token')) {
            this.props.history.push('/');
        }
    }

    renderField(field) {
        return(
            <div className="">
                <label>{ field.label }</label>
                <input
                    type={ field.type }
                    { ...field.input }
                />
            </div>
        );
    }

    onSubmit(values) {
        this.props.authUser(values);
    }

    renderMessage() {
        const msgObject = this.props.msgObject;
        if(msgObject) {
            return <div key={ msgObject.message }>{ msgObject.message }</div>
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <h1>Signin</h1>
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field name="email" label="Email" type="email" className="" component={ this.renderField } />
                    <Field name="password" label="Password" type="password" className="" component={ this.renderField } />
                    { this.renderMessage() }
                    <button type="submit">Sign in!</button>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    return errors;
}

const mapStateToProps = (state) => {
    return {
        msgObject: state.auth.msgObject
    }
}

const signinForm = reduxForm({ form: 'signin', validate })(Signin);
export default connect(mapStateToProps, { authUser })(signinForm);