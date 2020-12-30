import { takeLatest, call, put, select } from 'redux-saga/effects';
import authApi from 'Api/auth';
import * as authSlice from 'Slices/auth';
import swal from 'sweetalert';
import { push } from 'connected-react-router';

function* login({ payload }) {
  try {
    const { email, password } = payload;
    const res = yield call(authApi.login, { username: email, password });
    const { status, data } = res;
    if (status === 200) {
      yield put(authSlice.loginSuccess(data));
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken));
      localStorage.setItem('isAuth', JSON.stringify(true));
      swal('Success!', '', 'success');
      yield put(push('/'));
    }
  } catch (err) {
    swal(err.response.data.message, '', 'error');
  }
}

function* sagas() {
  yield takeLatest(authSlice.login.type, login);
}

export default sagas;
