import axios from "../../axios";

const endpoints = {
  registration: (data) => axios.post("/add-post", data),
};

export default endpoints;