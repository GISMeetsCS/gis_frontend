import axios from 'axios';

const apiClient = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
});

//export apiClient;
const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };