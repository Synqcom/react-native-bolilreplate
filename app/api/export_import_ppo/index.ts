import { get } from 'app/utils/api/request';

export const getEndpointsListApi = (endpointType: string) =>
  get(`/endpoints?type=${endpointType}`).then((response) => response.data);
