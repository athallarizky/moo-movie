import axios from 'axios'

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
});

instance.interceptors.response.use((response) => response.data)

export default instance
