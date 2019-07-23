const temp = (state = {}, action) => {
    switch (action.type) {
        case "TEST":
            return {...state, value : action.payload};
        default:
            return state
    }
};

export default temp;