import axios from "axios";
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
    SET_NEWS_SEARCH_TERM,
    SET_NEXT_PAGE_NUMBER,
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
    // If isNewDataRequest is true - rewrite state news data, otherwise - add new data to array

    dispatch({ type: NEWS_ARE_FETCHING, payload: true });

    try {

        dispatch({ type: NEWS_ERROR_OCCURRED, payload: false });

        const { data } = await getNews(payload);

        const totalResults = data.totalResults;

        const pagesAmount = totalResults ? Math.ceil(totalResults / 10) : 0;
 
        dispatch({
            type: GET_NEWS,
            payload: {
                data: data.results,
                nextPageNumber: data.nextPage,
                isNewDataRequest,
                totalPages: pagesAmount
            }
        });

    } catch (error) {
        dispatch({ type: NEWS_ERROR_OCCURRED, payload: true });

    } finally {

        dispatch({ type: NEWS_ARE_FETCHING, payload: false });
    }
}

// export const setPage = () => ({ type: SET_PAGE_NUMBER });
export const setSearchTerm = (payload: string) => ({ type: SET_NEWS_SEARCH_TERM, payload });

export const showSidebar = () => ({ type: SHOW_SIDEBAR });