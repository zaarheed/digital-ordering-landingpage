import axios from "axios";
import config from "../constants/config";

export const api = axios.create({
  baseURL: config.apiUrl
});

export const lambda = axios.create({
  baseURL: "/api"
});

export default api;