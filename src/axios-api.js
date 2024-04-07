import axios from 'axios';

const http  = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message === 'Network Error') {
      console.error('Erro de conexão com o servidor. Verifique sua conexão com a internet.');
    }
    return Promise.reject(error);
  }
);

export default http;
