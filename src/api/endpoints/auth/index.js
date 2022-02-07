import axios from "../../axios"

const endpoints = {
  register: (data) => axios.post("/add-person", data),
  login: (data) => axios.post("/login-person", data),
};

export default endpoints