import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://admin-gateway.core-banking.cloud/api/',
  withCredentials: false,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (axiosConfig: any) => {
    const value = await AsyncStorage.getItem('@Token:key');

    axiosConfig.headers.common.Authorization = value !== 'null' ? `Bearer ${value}` : '';

    return axiosConfig;
  },
  (error) => Promise.reject(error),
);

export const get = (url: string) => axiosInstance.get(url);
export const deleteMethod = (url: string) => axiosInstance.delete(url);
export const post = (url: string, data: any, config?: any) => axiosInstance.post(url, data, config);
export const put = (url: string, data: any) => axiosInstance.put(url, data);
