import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootSaga from './Saga';

const rootReducer = combineReducers({
  jobs: (state={}, action) => {
    switch (action.type) {
      case 'FETCH_JOBS_SUCCESS':
        let mapping = {};
        action.payload.jobs.map(job => {
          const department = job
            .departments
            .sort((left, right) => left.id - right.id)
            .map(department => department.name)
            .join('&raquo;');
          if (!mapping[department]) {
            mapping[department] = [];
          }
          return mapping[department].push(job);
        });
        return mapping;
      default:
        return state;
    }
  },
  selectedLocation: (state='None Selected', action) => {
    switch (action.type) {
      case 'SWITCH_LOCATION':
        return action.payload;
      default:
        return state;
    }
  },
  selectedDepartment: (state='None Selected', action) => {
    switch (action.type) {
      case 'SWITCH_DEPARTMENT':
        return action.payload;
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
