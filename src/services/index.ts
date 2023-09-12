import axios from "axios";
import config from "../config.json";
import { INewsRequestPayload } from "../interfacesAndTypes";

const baseURL = 'https://newsdata.io/api/1/';
const NEWS_API_KEY = config.NEWS_API_KEY;

axios.defaults.baseURL = baseURL;


export const getBriefSectionNews = ({ category, size = 4 }: INewsRequestPayload) => {
    return axios.get(`news?apikey=${NEWS_API_KEY}&${category ? `category=${category}&` : ''}language=en&image=1&size=${size}`)
}


export const getNews = ({ category = '', page, searchTerm = '' }: INewsRequestPayload) => {
    return axios.get(`news?apikey=${NEWS_API_KEY}&${searchTerm && `q=${searchTerm}&`}${category && `category=${category}&`}language=en&image=1${page ? `&page=${page}` : ''}`)
} 