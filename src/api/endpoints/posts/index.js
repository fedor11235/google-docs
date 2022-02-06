import axios from "../../axios";

const endpoints = {
  createPosts: (data) => axios.post("/add-post", data),
};

export default endpoints;