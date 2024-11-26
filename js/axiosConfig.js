import axios from 'axios';

const api = axios.create({
  baseURL: 'https://integrador2-production.up.railway.app/api/usuarios', 
});

export default api;