import axios from 'axios';

const axiosAuthApiInstance = axios.create({
  baseURL: 'https://us-central1-takweed-eg.cloudfunctions.net',
  //baseURL: 'http://192.168.1.229:3002',
});
axiosAuthApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      ...config.headers,
      otptoken: 'TakweedFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosAuthApiInstance.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      // redirect to login page
      console.error('401 from intercept', 'Error Auth. I will retry.');
    }
    return Promise.reject(error);
  },
);

export default axiosAuthApiInstance;
