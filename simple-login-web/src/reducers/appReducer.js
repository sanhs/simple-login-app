import { AUTH, FETCH_GIT_DETAILS } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return Object.assign({}, state, {
                user: action.payload
            });
        case FETCH_GIT_DETAILS:
            return Object.assign({}, state, {
                git: action.payload
            });
        default: return state;
    }
}