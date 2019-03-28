export function productReducer(state = [], { type, payload }) {
    switch (type) {
        case 'updateProduct':
            return payload;
        default:
            return state;
    }
}
