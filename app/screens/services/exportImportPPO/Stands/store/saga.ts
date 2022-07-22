import { put, takeLatest } from 'redux-saga/effects';
import { call } from '@redux-saga/core/effects';
import { TGetStandsListRequest } from './types';
import { TStandListElement } from 'app/screens/services/exportImportPPO/store/types';
import { getStandsListSuccess } from '../../store/ImportExportPPOSlice';
import { GET_STANDS_LIST_REQUEST } from 'app/screens/services/exportImportPPO/Stands/store/constants';
import { getEndpointsListApi } from 'app/api/export_import_ppo';

function* getStandsListSaga({ payload }: TGetStandsListRequest) {
  try {
    const standList: TStandListElement[] = yield call(getEndpointsListApi, payload);
    yield put(getStandsListSuccess(standList));
  } catch (err) {
    // yield put(
    //   setNotification({
    //     notificationTitle: 'Ошибка!',
    //     notificationMessage: 'Не удалось получить список стендов. Попробуйте ещё раз.',
    //     notificationStatus: 'error-status',
    //   }),
    // );
  }
}

export default function* standsActionWatcher() {
  yield takeLatest(GET_STANDS_LIST_REQUEST, getStandsListSaga);
}
