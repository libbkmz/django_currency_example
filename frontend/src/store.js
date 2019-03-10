import {configureStore, getDefaultMiddleware} from "redux-starter-kit";
import logger from 'redux-logger';
import RootReducer from './reducers';

const middleware = [...getDefaultMiddleware(), logger];
export const initialState = {
    test_items: [],
    signup: {
        visible: false
    }
};

export const store = configureStore({
    reducer: RootReducer,
    preloadedState: initialState,
    middleware: middleware,
});
