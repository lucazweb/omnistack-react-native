import axios from 'axios';

const desenv_local_ip = `http://192.168.0.10:3333`;

const api = axios.create({
  baseURL: desenv_local_ip
});

export default api;
