import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const configOMB = {
    baseURL: 'https://www.omdbapi.com/?apikey=dc8d7fee&',
};
const key = 'dc8d7fee';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle(title: string) {

        return axios.get(`https://www.omdbapi.com/?apikey=dc8d7fee&t=${title}` )
    },
    searchFilmsByType(title: string, type: string) {
        return axios.get(`https://www.omdbapi.com/?apikey=dc8d7fee&type=${type}&s=${title}`)
    }
};


export default API;
