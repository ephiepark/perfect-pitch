import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { perfectPitchApp, initState } from './reducers';

const store = createStore(
  perfectPitchApp,
  initState,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  ),
);

export default store;
