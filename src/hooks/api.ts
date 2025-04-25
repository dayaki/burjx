import axios from "axios";

// Base URL for API
const API_BASE_URL = "https://coingeko.burjx.com";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
