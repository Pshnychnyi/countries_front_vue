import axios from "axios";

const requestAxios = axios.create({
    baseURL: import.meta.env.VITE_APP_BACK_URL
})

export default requestAxios