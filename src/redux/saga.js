import { call, put, takeEvery } from 'redux-saga/effects';

import { getData } from './slice/data-slice';
import { requestGetData } from './request';

function* workGetData(){
    const response = yield call(requestGetData);
    const { data } = response;
    yield put(getData(data));
}

function* watcherSaga(){
    yield takeEvery('data/fetchData', workGetData);
}

export default watcherSaga;