import axios from 'axios'
const service = axios.create({
  baseURL: "http://localhost:8888",
  timeout: 5e3
});
export default service;
