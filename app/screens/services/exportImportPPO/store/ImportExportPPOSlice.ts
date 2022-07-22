import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'app/screens/services/exportImportPPO/store/constants';
import {
  TRepositoryListElement,
  TStandListElement,
} from 'app/screens/services/exportImportPPO/store/types';

const ExportImportPPOSlice = createSlice({
  name: 'exportImportPPO',
  initialState,
  reducers: {
    // -------получение списка репозиториев ----
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRepositoriesListRequest: (state, action: PayloadAction<any>) => {},
    getRepositoriesListSuccess: (state, action: PayloadAction<TRepositoryListElement[]>) => {
      state.repositories.repositoriesList = action.payload;
    },

    // -------получение списка стендов ------
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getStandsListRequest: (state, action: PayloadAction<any>) => {},
    getStandsListSuccess: (state, action: PayloadAction<TStandListElement[]>) => {
      state.stands.standsList = action.payload;
    },
  },
});
export const {
  getRepositoriesListRequest,
  getRepositoriesListSuccess,
  getStandsListRequest,
  getStandsListSuccess,
} = ExportImportPPOSlice.actions;

export default ExportImportPPOSlice;
