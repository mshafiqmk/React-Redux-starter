import { UPDATE_USER, ADD_USER } from "../actions/userActions";
export function userReducer(state = [], { type, payload }) {
    switch (type) {
        case ADD_USER:
            return payload.user;
        case UPDATE_USER:
            return payload.user;
        default:
            return state;
    }
}