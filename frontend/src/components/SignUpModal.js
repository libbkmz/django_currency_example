import React from 'react';
import {connect} from "react-redux";
import {CLOSE_SIGNUP_MODAL} from "../actions";


class SignUpModalCls extends React.Component {
    closeModal = () => {
        this.props.CLOSE_SIGNUP_MODAL();
    };

    render() {
        console.log(this.props);
        return (
            <>
                { this.props.visible &&
                <div className="modal is-active">
                    <div className="modal-background" onClick={this.closeModal} />
                    <div className="modal-content">
                        <div className="box">

                            {/*<form action=""></form>*/}

                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="email" placeholder="Email" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope" />
                                    </span>
                                </p>
                            </div>

                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" placeholder="Password" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock" />
                                    </span>
                                </p>
                            </div>

                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-primary">
                                        Sign-up
                                    </button>
                                </p>
                            </div>

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
        return state.signup
    },{
        CLOSE_SIGNUP_MODAL,
    }

)(SignUpModalCls);

export {SignUpModal};