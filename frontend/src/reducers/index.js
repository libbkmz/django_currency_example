import {createReducer} from "redux-starter-kit";
import {initialState} from "../store";
import {OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL} from "../actions";


const rootReducer = createReducer(initialState, {
        [OPEN_SIGNUP_MODAL]: (state, action) => {
            return Object.assign({}, state, {signup: {visible: true}});
        },
        [CLOSE_SIGNUP_MODAL]: (state, action) => {
            return Object.assign({}, state, {signup: {visible: false}});
        }

    }
);


export default rootReducer;