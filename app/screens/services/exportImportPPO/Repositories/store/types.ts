import { GET_REPOSITORIES_LIST_REQUEST } from './constants';

export type TGetRepositoriesListRequest = {
  type: typeof GET_REPOSITORIES_LIST_REQUEST;
  payload: { values: string; NavigationService: any };
};
