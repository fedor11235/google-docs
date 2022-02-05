import axios from "axios";

// const headers = {
//   'Content-Type': 'text/plain'
// };

const axiosInstance = axios.create({
  baseURL: 'localhost:5000/api',
  withCredentials: false,
});

export default axiosInstance;
