import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axiosMobileApiInstance = axios.create({
  baseURL: 'https://us-central1-takweed-eg.cloudfunctions.net',
  // baseURL: 'http://192.168.1.63:3002',
});

// Request interceptor for API calls
axiosMobileApiInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    };
    if (token) {
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosMobileApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      // redirect to login page
      console.error('401', 'Error Auth');
    }
    return Promise.reject(error);
  },
);

export default axiosMobileApiInstance;
