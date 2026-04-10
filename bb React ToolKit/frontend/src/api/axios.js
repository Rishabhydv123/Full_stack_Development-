import axios from "axios";

const api = axios.create({
  baseURL: "[localhost](http://localhost:5000/api)"
});

export default api;
