import { takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from './user.types';

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNING_START)
}