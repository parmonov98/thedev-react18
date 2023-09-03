import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thedev.devdata.uz"
});

export default instance;