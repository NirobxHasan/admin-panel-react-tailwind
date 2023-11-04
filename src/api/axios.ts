import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  //   withCredentials: true,
  headers: {'Content-Type': ' application/json'},
});