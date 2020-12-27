import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from 'saga';
// import authSlice from 'slices/authSlice';

const rootReducer = {
  // auth: authSlice,
};
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});
sagaMiddleware.run(rootSaga);

export default store;
