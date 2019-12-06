import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portalbox.tech/',
  'Content-Type': 'application/json',
});

export default api;
