import axios from "axios";
import config from "../config.json";
import { IGetLatestHeadlines, INewsRequestPayload } from "../interfacesAndTypes";

const baseURL = 'https://newsapi.org/v2/';
const NEWS_API_KEY = config.NEWS_API_KEY;

axios.defaults.baseURL = baseURL;


export const getLatestHeadlines = ({ lang, pageSize, page }: IGetLatestHeadlines) => {
    return axios.get(`top-headlines?country=us&apiKey=${NEWS_API_KEY}`)
}


export const getNews = ({ category, pageSize = 16, page = 1, searchTerm }: INewsRequestPayload) => {
    return axios.get(`top-headlines?country=de&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${NEWS_API_KEY}`)
}


export const getNewsBySearchTerm = ({ searchTerm, pageSize, page }: any) => {
    return axios.get(`search?q=${searchTerm}&page_size=${pageSize}&page=${page}`)
} 