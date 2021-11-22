import UserActionTypes  from './user.types'
const INITIALIZE_STATE = {
    currentUser: null
}

const userReducer = (state = INITIALIZE_STATE, action) => {

    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGNING_SUCCESS:
        case UserActionTypes.EMAIL_SIGNING_SUCCESS:
        return {
            ...state,
            currentUser: action.payload,
            error: null

        };

        case UserActionTypes.GOOGLE_SIGNING_FAILURE:
        case UserActionTypes.EMAIL_SIGNING_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
        return state;
    }
};

export default userReducer;