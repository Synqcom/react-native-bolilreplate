import { put, takeLatest, call, delay } from 'redux-saga/effects';
import { TLoginUserRequest } from 'app/screens/LoginPage/store/types';
import { LOGIN_USER_REQUEST } from 'app/screens/LoginPage/store/constants';
import { getToken } from 'app/api/auth';
import { setAuthSuccess, setToken } from './LoginSlice';
import AsyncStorage from '@react-native-community/async-storage';
import { TLogin } from 'app/screens/LoginPage/types';
import { setNotification } from 'app/store/configureStore';

function* authentication(loginData: TLogin) {
  try {
    yield put(setToken(null));
    AsyncStorage.setItem('@Token:key', 'null');
    yield delay(100);
    // throw Error;
    const { id_token } = yield call(getToken, loginData);
    yield delay(100);
    AsyncStorage.setItem('@Token:key', id_token);
    yield put(setToken(id_token));
    yield put(setAuthSuccess());
  } catch (err) {
    yield put(
      setNotification({
        notificationTitle: 'Ошибка!',
        notificationMessage:
          'Ошибка аутентификации. Убедитесь в правильности написания логина и пароля.',
        notificationStatus: 'error-status',
      }),
    );
  }
}

function* loginSaga({ payload }: TLoginUserRequest) {
  try {
    yield call(authentication, payload.values);
    // payload.NavigationService.navigate('ForgotPassword');
  } catch (err) {
    // yield put(
    //   loginUserFailedAC({
    //   }),
    // );
  }
}

export default function* userLoginActionWatcher() {
  yield takeLatest(LOGIN_USER_REQUEST, loginSaga);
}
