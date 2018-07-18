import { AUTH, FETCH_USER} from "../actions/types";

const initialState = {
    user: {}
};

export default function (state=initialState, action) {
    switch (action.type) {
        case AUTH:
            return {
                state: state,
                user: action.payload
            };
        case FETCH_USER:
            return {
                state: state,
                user: action.payload
            };
        default: return state;
    }
}