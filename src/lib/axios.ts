import Axios from "axios";

import { API_BASE_URL } from "@/config";

export const axios = Axios.create({ baseURL: API_BASE_URL, timeout: 20000 });

axios.interceptors.response.use((response) => response.data);
