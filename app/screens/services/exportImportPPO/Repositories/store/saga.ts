import { put, takeLatest, call } from 'redux-saga/effects';
import { TRepositoryListElement } from 'app/screens/services/exportImportPPO/store/types';
import { getEndpointsListApi } from 'app/api/export_import_ppo';
import { GET_REPOSITORIES_LIST_REQUEST } from 'app/screens/services/exportImportPPO/Repositories/store/constants';
import { getRepositoriesListSuccess } from 'app/screens/services/exportImportPPO/store/ImportExportPPOSlice';
import { TGetRepositoriesListRequest } from 'app/screens/services/exportImportPPO/Repositories/store/types';

function* getRepositoriesListSaga({ payload }: TGetRepositoriesListRequest) {
  try {
    const repositoryList: TRepositoryListElement[] = yield call(
      getEndpointsListApi,
      payload.values,
    );
    yield put(getRepositoriesListSuccess(repositoryList));
    payload.NavigationService.navigate('Repositories');
  } catch (err) {
    // yield put(
    //   setNotification({
    //     notificationTitle: 'Ошибка!',
    //     notificationMessage: 'Не удалось получить список репозиториев. Попробуйте ещё раз.',
    //     notificationStatus: 'error-status',
    //   }),
    // );
  }
}

export default function* standsAndRepoActionWatcher() {
  yield takeLatest(GET_REPOSITORIES_LIST_REQUEST, getRepositoriesListSaga);
}
