import { TLogin } from 'app/screens/LoginPage/types';
import { post } from 'app/utils/api/request';

export const getToken = (data: TLogin) =>
  post('/authenticate', data).then((response) => response.data);
