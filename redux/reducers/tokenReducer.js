const initialState = {
    token: null,
}

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TOKEN':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}

export default tokenReducer;