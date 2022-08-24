import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://midaiganes.irw.ee/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default axiosInstance;
