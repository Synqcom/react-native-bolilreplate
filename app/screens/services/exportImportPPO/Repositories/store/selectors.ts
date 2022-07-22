import { createSelector } from '@reduxjs/toolkit';
import { TExportImportPPORepositories, TExportImportPPOStore } from '../../store/types';

export const repositoriesState = (state: TExportImportPPOStore) =>
  state.exportImportPPO.repositories;

export const repositoriesListSelector = () =>
  createSelector(
    repositoriesState,
    (state: TExportImportPPORepositories) => state.repositoriesList,
  );

export const repositoryInfoSelector = () =>
  createSelector(repositoriesState, (state: TExportImportPPORepositories) => state.repositoryInfo);
