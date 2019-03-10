import React from 'react';
import {connect} from "react-redux";
import {OPEN_SIGNUP_MODAL} from "../actions";


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <span className="icon">
                                <i className="fas fa-2x fa-hand-holding-usd" />
                            </span>
                        </a>

                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary"  onClick={() => this.props.OPEN_SIGNUP_MODAL() }>
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>

                    </div>

                    {/*{This is not responsive. TODO: implement showing this }*/}
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Home
                            </a>

                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}


export default connect(
    null,
    {
        OPEN_SIGNUP_MODAL,
    }
)(NavBar);
