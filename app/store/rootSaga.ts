import userLoginActionWatcher from 'app/screens/LoginPage/store/saga';
import { all } from 'redux-saga/effects';
import standsAndRepoActionWatcher from 'app/screens/services/exportImportPPO/Repositories/store/saga';
import standsActionWatcher from 'app/screens/services/exportImportPPO/Stands/store/saga';

export default function* rootSaga() {
  yield all([userLoginActionWatcher(), standsAndRepoActionWatcher(), standsActionWatcher()]);
}
