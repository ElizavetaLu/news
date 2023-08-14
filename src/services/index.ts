import axios from "axios";
import config from "../config.json";
import { IGetLatestHeadlines } from "../interfacesAndTypes"; 

const baseURL = 'https://api.newscatcherapi.com/v2/';
const NEWS_API_KEY = config.NEWS_API_KEY;

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['x-api-key'] = NEWS_API_KEY;


export const getLatestHeadlines = ({ lang, pageSize, page }:IGetLatestHeadlines) => {
    return axios.get(`latest_headlines?when=7d&lang=${lang}&page_size=${pageSize}&page=${page}`)
} 