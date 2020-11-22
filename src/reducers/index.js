import { combineReducers } from 'redux';

// import reducers
import input from './inputReducer';
import output from './outputReducer';

const allReducers = combineReducers({
  input,
  output
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
}

export default rootReducer;
