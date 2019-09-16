import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.53.102:3333/',
  'Content-Type': 'application/json',
});

export default api;
