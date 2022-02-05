import axios from "../../axios";

const endpoints = {
  registration: (data) => axios.post("/add-person", data),
  login: (data) => axios.post("/login-person", data),
};

export default endpoints;