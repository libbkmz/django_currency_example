import React from 'react';
import {connect} from "react-redux";
import axios from 'axios';
import {CLOSE_SIGNUP_MODAL, SIGNUP_SERVER_BEGIN, SIGNUP_SERVER_ERROR, SIGNUP_SERVER_SUCCESSFUL} from "../actions";


class SignUpModalCls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pwd: "",
        }
    }

    closeModal = () => {
        this.props.CLOSE_SIGNUP_MODAL();
    };

    generalOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    formSubmit = (e) => {
        let self = this;
        e.preventDefault();

        this.props.SIGNUP_SERVER_BEGIN();
        axios.post("http://localhost:8000/api/users/create", {
            email: self.state.email,
            password: self.state.pwd,
        })
            .then(res => {
                console.log(res);
                self.props.SIGNUP_SERVER_SUCCESSFUL(res.data);
            })
            .catch(res => {
                console.info(res);
                self.props.SIGNUP_SERVER_ERROR(res.response.data);
            })


    };

    render() {
        // console.log(this.props);
        return (
            <>
                { this.props.signupModal.visible &&
                <div className="modal is-active">
                    <div className="modal-background" onClick={this.closeModal} />
                    <div className="modal-content">
                        <div className="box">

                            <form onSubmit={this.formSubmit}>

                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.generalOnChange} />
                                        <span className="icon is-small is-left">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    </p>
                                </div>

                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input" type="password" placeholder="Password" name="pwd" value={this.state.pwd} onChange={this.generalOnChange} />
                                        <span className="icon is-small is-left">
                                        <i className="fas fa-lock" />
                                    </span>
                                    </p>
                                </div>

                                <div className="columns">
                                    <div className="column is-2">

                                        <div className="field is-grouped">
                                            <p className="control">
                                                <button className="button is-primary" type="submit">
                                                    Sign-up
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="column">
                                        { this.props.signupRequest.error && JSON.stringify(this.props.signupRequest.error) }
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.closeModal} />
                </div>}
            </>
        );
    }
}

const SignUpModal = connect(
    (state) => {
        return {
            signupModal: state.signupModal,
            signupRequest: state.signupRequest,
        }
    },{
        CLOSE_SIGNUP_MODAL,
        SIGNUP_SERVER_BEGIN,
        SIGNUP_SERVER_SUCCESSFUL,
        SIGNUP_SERVER_ERROR
    }

)(SignUpModalCls);

export {SignUpModal};