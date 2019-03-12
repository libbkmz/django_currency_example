import {createReducer} from "redux-starter-kit";
import {initialState} from "../store";
import {OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL, SIGNUP_SERVER_SUCCESSFUL, SIGNUP_SERVER_BEGIN, SIGNUP_SERVER_ERROR} from "../actions";


const rootReducer = createReducer(initialState, {
        [OPEN_SIGNUP_MODAL]: (state, action) => {
            return Object.assign({}, state, {signupModal: {visible: true}});
        },
        [CLOSE_SIGNUP_MODAL]: (state, action) => {
            return Object.assign({}, state, {
                    signupModal: {
                        visible: false
                    }
                }
            );
        },
        [SIGNUP_SERVER_BEGIN]: (state, action) => {
            return Object.assign({}, state, {
                    signupRequest: {
                        error: initialState.signupRequest.error,
                        inProgress: true,
                    }
                }
            );
        },
        [SIGNUP_SERVER_SUCCESSFUL]: (state, action) => {
            return Object.assign({}, state, {
                    signupModal: {
                        visible: false
                    },
                    signupRequest: {
                        inProgress: false,
                        completed: true,
                    }
                }
            )
        },
        [SIGNUP_SERVER_ERROR]: (state, action) => {
            return Object.assign({}, state, {signupRequest: {error: action.payload}});
        },

    }
);


export default rootReducer;