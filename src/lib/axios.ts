import Axios from "axios";

const JSON_API = "https://jsonplaceholder.typicode.com";
export const axios = Axios.create({ baseURL: JSON_API, timeout: 20000 });

axios.interceptors.response.use((response) => response.data);
