import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.90.128.164/',
  'Content-Type': 'application/json',
});

export default api;
