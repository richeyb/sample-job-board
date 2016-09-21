import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { fetchJobBoards } from './JobBoardApi';

function* fetchJobs() {
  try {
    const response = yield call(fetchJobBoards, 'airbnb');
    yield put({ type: 'FETCH_JOBS_SUCCESS', payload: { jobs: response.data.jobs }});
  } catch (error) {
    yield put({ type: 'ERROR' , payload: error });
  }
}
function* watchFetchJobs() {
  yield* takeEvery('FETCH_JOBS', fetchJobs);
}
function* RootSaga() {
  yield [watchFetchJobs()];
}

export default RootSaga;
