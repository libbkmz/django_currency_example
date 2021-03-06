import {configureStore, getDefaultMiddleware} from "redux-starter-kit";
import logger from 'redux-logger';
import RootReducer from './reducers';

const middleware = [...getDefaultMiddleware(), logger];
export const initialState = {
    signupModal: {
        visible: false
    },
    signupRequest: {
        inProgress: false,
        error: false,
        completed: false,
    }
};

export const store = configureStore({
    reducer: RootReducer,
    preloadedState: initialState,
    middleware: middleware,
});
