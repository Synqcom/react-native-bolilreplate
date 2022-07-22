import { TExportImportPPOStore } from 'app/screens/services/exportImportPPO/store/types';

export const INITIAL_ENDPOINT_INFO_VALUES = {
  id: '',
  name: '',
  type: '',
  url: '',
  token: '',
  username: '',
};

export const initialState: TExportImportPPOStore['exportImportPPO'] = {
  stands: {
    standInfo: INITIAL_ENDPOINT_INFO_VALUES,
    standsList: [],
  },
  repositories: {
    repositoriesList: [],
    repositoryInfo: INITIAL_ENDPOINT_INFO_VALUES,
  },
  exportPPO: {
    namespaces: [],
    dependenciesNameSpaces: [],
  },
};
