import { INewsRequestPayload } from "../../interfacesAndTypes";
import { getLatestHeadlines, getNews } from "../../services"
import {
    LATEST_HEADLINES_IS_ERROR_OCCURRED,
    LATEST_HEADLINES_IS_FETCHING,
    GET_LATEST_HEADLINES, 
    SHOW_SIDEBAR,
    GET_NEWS,
    NEWS_ERROR_OCCURRED,
    NEWS_ARE_FETCHING, 
} from "./types";


export const latestHeadlines = (payload: any) => async (dispatch: any) => {

    try {
        dispatch({ type: LATEST_HEADLINES_IS_ERROR_OCCURRED, payload: false });

        dispatch({ type: LATEST_HEADLINES_IS_FETCHING });

        const { data } = await getLatestHeadlines(payload);

        dispatch({ type: GET_LATEST_HEADLINES, payload: data.articles });
        dispatch({ type: LATEST_HEADLINES_IS_FETCHING });

    } catch (error) {
        dispatch({ type: LATEST_HEADLINES_IS_FETCHING });
        dispatch({ type: LATEST_HEADLINES_IS_ERROR_OCCURRED, payload: true });
    }
}
 

export const news = (isNewDataRequest: boolean, payload: INewsRequestPayload) => async (dispatch: any) => {

    try {

        // If isNewDataRequest is true - rewrite state news data, otherwise - add new data to array

        // dispatch({ type: NEWS_ERROR_OCCURRED, payload: false });
        dispatch({ type: NEWS_ARE_FETCHING });

        const { data } = await getNews(payload);

        const totalResults = data.totalResults;
        let pagesAmount = 0;

        if (totalResults) {
            pagesAmount = Math.ceil((totalResults - 16) / 15) + 1
        } 
        
        dispatch({
            type: GET_NEWS,
            payload: {
                data: data.articles,
                isNewDataRequest,
                totalPages: pagesAmount
            }
        });

        dispatch({ type: NEWS_ARE_FETCHING });

    } catch (error) {
        dispatch({ type: NEWS_ARE_FETCHING });
        dispatch({ type: NEWS_ERROR_OCCURRED, payload: true });
    }
}



export const showSidebar = () => ({ type: SHOW_SIDEBAR });