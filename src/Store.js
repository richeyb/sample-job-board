import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Saga';

const rootReducer = combineReducers({
  jobs: (state=[], action) => {
    switch (action.type) {
      case 'FETCH_JOBS_SUCCESS':
        return action.payload.jobs;
      default:
        return state;
    }
  },
  selectedJob: (state={}, action) => { return state; },
  error: (state="", action) => {
    switch (action.type) {
      case 'ERROR':
        return action.payload;
      default:
        return state;
    }
  }
});
const sagaMiddleware = createSagaMiddleware();
const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default Store;
