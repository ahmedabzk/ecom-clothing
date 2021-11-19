import { takeEvery, call, put, takeLatest} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';


export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));

    } catch(erro) {
     yield put(fetchCollectionsFailure(erro.message));
    }


}

export function* fetchCollectionsStar() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        );

    
}
