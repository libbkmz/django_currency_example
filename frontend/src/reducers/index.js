import {createReducer} from "redux-starter-kit";
import {initialState} from "../store";
import {OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL} from "../actions";


const rootReducer = createReducer(initialState, {
        [ADD_NEW_ITEM]: (state, action) => {
            return {
                ...state,
                test_items: [...state.test_items, action.payload]}
        },
        [OPEN_SIGNUP_MODAL]: (state, action) => {
            let out = state;
            out.signup.visible = true;
            return out;
        },
        [CLOSE_SIGNUP_MODAL]: (state, action) => {
            let out = state;
            out.signup.visible = false;
            return out;
        }

    }
);


export default rootReducer;