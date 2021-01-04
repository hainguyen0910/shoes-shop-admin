import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'Sagas';
import authSlice from 'Slices/auth';
import uiSlice from 'Slices/ui';

export const history = createBrowserHistory();

const rootReducer = {
  router: connectRouter(history),
  auth: authSlice,
  ui: uiSlice,
};
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  routerMiddleware(history),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});
sagaMiddleware.run(rootSaga);

export default store;
