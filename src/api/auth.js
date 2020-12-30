import axiosClient from './axiosClient';

const authApi = {
  login: (data) => {
    const url = '/admin/login';
    return axiosClient.post(url, data);
  },
  logout: (data) => {
    const url = '/admin/logout';
    return axiosClient.post(url, data);
  },
};

export default authApi;
