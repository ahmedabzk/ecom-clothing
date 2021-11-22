import UserActionTypes from './user.types';


export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user

});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGNING_START
});

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGNING_SUCCESS,
    payload: user
});

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGNING_FAILURE,
    payload: error

});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGNING_START,
    payload: emailAndPassword
});

export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGNING_SUCCESS,
    payload: user
});

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGNING_FAILURE,
    payload: error

});