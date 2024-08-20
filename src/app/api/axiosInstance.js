// utils/axiosInstance.js
import axios from "axios";
import vars from "../../utilites/variables";
const axiosInstance = axios.create({
  baseURL: vars.baseURL, // Base URL from environment variable
  // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Modify config if needed, e.g., add authorization token
//     // config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     // Handle errors, e.g., redirect on 401
//     if (error.response && error.response.status === 401) {
//       // Redirect to login or perform logout
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
