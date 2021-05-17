import axios from "axios";

const api = axios.create({
  baseURL: 'https://happet.herokuapp.com',
  // baseURL: "localhost:3333",
});

export default api;
