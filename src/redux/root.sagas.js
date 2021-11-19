import { all, call} from 'redux-saga';

import { fetchCollectionsStar} from './shop/shop.sagas';

export default function* rootSagas() {
    yield all([
        call(fetchCollectionsStar)
    ])
}