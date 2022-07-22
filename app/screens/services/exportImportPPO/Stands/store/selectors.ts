import { createSelector } from '@reduxjs/toolkit';
import { TExportImportPPOStands, TExportImportPPOStore } from '../../store/types';

export const standsState = (state: TExportImportPPOStore) => state.exportImportPPO.stands;

export const standsListSelector = () =>
  createSelector(standsState, (state: TExportImportPPOStands) => state.standsList);

export const standInfoSelector = () =>
  createSelector(standsState, (state: TExportImportPPOStands) => state.standInfo);
