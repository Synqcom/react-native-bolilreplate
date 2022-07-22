import { GET_STANDS_LIST_REQUEST } from './constants';

export type TGetStandsListRequest = {
  type: typeof GET_STANDS_LIST_REQUEST;
  payload: string;
};
