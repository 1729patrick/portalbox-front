import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  'Content-Type': 'application/json',
});

export default api;
// https://portalbox.tech
// http://localhost:3333
