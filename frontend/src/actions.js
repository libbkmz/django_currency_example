import {createAction} from "redux-starter-kit";
import axios from 'axios';

export const OPEN_SIGNUP_MODAL = createAction("OPEN_SIGNUP_MODAL");
export const CLOSE_SIGNUP_MODAL = createAction("CLOSE_SIGNUP_MODAL");

export const SEND_SIGNUP_DATA = createAction("SEND_SIGNUP_DATA");
export const SIGNUP_SERVER_BEGIN = createAction("SIGNUP_SERVER_BEGIN");
export const SIGNUP_SERVER_SUCCESSFUL = createAction("SIGNUP_SERVER_SUCCESSFUL");
export const SIGNUP_SERVER_ERROR = createAction("SIGNUP_SERVER_ERROR");
