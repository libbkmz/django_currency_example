import {createReducer} from "redux-starter-kit";
import {initialState} from "../store";
import {OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL, SIGNUP_SERVER_SUCCESSFUL} from "../actions";


const rootReducer = createReducer(initialState, {
        [OPEN_SIGNUP_MODAL]: (state, action) => {
            return Object.assign({}, state, {signupModal: {visible: true}});
        },
        [CLOSE_SIGNUP_MODAL]: (state, action) => {
            return Object.assign({}, state, {signupModal: {visible: false}});
        },
        [SIGNUP_SERVER_SUCCESSFUL]: (state, action) => {
            return Object.assign({}, state, {signupRequest: {inProgress: true}})
        }

    }
);


export default rootReducer;