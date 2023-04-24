import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
    /* headers: {
        Accept: 'application/json'
    } */
});

authFetch.interceptors.response.use(
    (resp) => {
        axios.defaults.headers['Accept'] = 'application/json';
        console.log("response received");
        return resp
    },
    (error) => {
        throw new Error(error)
    }
)

authFetch.interceptors.request.use(
    (resp) => {
        console.log("request send");
        return resp
    },
    (error) => {
        throw new Error(error)
    }
)

export default authFetch;