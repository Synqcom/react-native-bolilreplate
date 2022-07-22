import { createSelector } from '@reduxjs/toolkit';
import { TAuth, TState } from './types';

export const authState = (state: TState) => state.authData;

export const isAuthenticatedSelector = () =>
  createSelector(authState, (state: TAuth) => state.isAuthenticated);
