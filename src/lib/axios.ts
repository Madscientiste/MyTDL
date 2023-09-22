import Axios from "axios";

export const axios = Axios.create({ baseURL: "/api", timeout: 20000 });

axios.interceptors.response.use((response) => response.data);
