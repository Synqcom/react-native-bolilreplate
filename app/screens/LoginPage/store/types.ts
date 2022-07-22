import { LOGIN_USER_REQUEST } from './constants';

export type TLoginUserRequest = {
  type: typeof LOGIN_USER_REQUEST;
  payload: {
    values: { username: string; password: string };

    NavigationService: any;
  };
};

export type TAuth = {
  accessToken: string;
  isAuthenticated: boolean;
};

export type TState = {
  authData: {
    isAuthenticated: boolean;
    accessToken: string;
  };
};

export type LoginUserTypes = TLoginUserRequest;
