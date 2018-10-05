import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../rootReducer';
import { saveState, loadState } from '../helpers/localStorage';

const middlewares = [
  thunk,
  logger,
];

const persistedState = loadState();

const store = createStore (
  rootReducer,
  persistedState,
  applyMiddleware(...middlewares),
);

store.subscribe(() => {
  saveState({
    bitLink: store.getState().bitLink,
  })
});

export default function configureStore() {
  return store
}
