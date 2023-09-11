import axios from "axios";
import config from "../config.json";
import { IGetLatestHeadlines, INewsRequestPayload } from "../interfacesAndTypes";

const baseURL = 'https://newsdata.io/api/1/';
const NEWS_API_KEY = config.NEWS_API_KEY;

axios.defaults.baseURL = baseURL;


export const getLatestHeadlines = ({ lang, pageSize, page }: IGetLatestHeadlines) => {
    return axios.get(`top-headlines?country=us&apiKey=${NEWS_API_KEY}country=us&`)
}


export const getNews = ({ category = '', page, searchTerm = '' }: INewsRequestPayload) => {

    return axios.get(`news?apikey=${NEWS_API_KEY}&${searchTerm && `q=${searchTerm}&`}${category && `category=${category}&`}language=en&image=1${page ? `&page=${page}` : ''}`)
} 