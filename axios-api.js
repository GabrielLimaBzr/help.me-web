import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || 'http://localhost:9090',
  timeout: 5000,
});

export default axiosInstance;
