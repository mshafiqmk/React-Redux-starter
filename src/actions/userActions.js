export const UPDATE_USER = "users:update";
export const ADD_USER = "users:add";

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function addUser(newUser) {
    return {
        type: ADD_USER,
        payload: {
            user: newUser
        }
    }
}

