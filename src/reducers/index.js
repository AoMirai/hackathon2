import { combineReducers } from 'redux';

import router from './router'
import questions from './questions'
import counter from './counter'

const allReducers = combineReducers({
  questions,
  counter,
  router,
});

export default allReducers;
