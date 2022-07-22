import { createSelector } from '@reduxjs/toolkit';

export const state = (state: any) => state;

export const createNotificationDataSelector = () =>
  createSelector(state, (state: any) => state.notificationsStore);

export const createLoadingSelector = () =>
  createSelector(state, (state: any) => state.loadingStore);

export const createLoadingScreenSelector = () =>
  createSelector(state, (state: any) => state.loadingScreenStore);

export const makeSelectLocaleSelector = () => createSelector(state, (state: any) => state.localize);

export const isOpenLeftBarSelector = () =>
  createSelector(state, (state: any) => state.utils.isOpenLeftBar);

export const openModalTypeSelector = () =>
  createSelector(state, (state: any) => state.errorStore.openModalType);
