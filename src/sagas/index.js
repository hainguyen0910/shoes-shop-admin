import 'regenerator-runtime/runtime';
import authSaga from './auth';

function* rootSaga() {
  yield* authSaga();
}

export default rootSaga;
