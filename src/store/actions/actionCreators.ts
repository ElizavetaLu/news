import { getLatestHeadlines, getNewsBySearchTerm } from "../../services"
import {
    LATEST_HEADLINES_IS_ERROR_OCCURRED,
    LATEST_HEADLINES_IS_FETCHING,
    GET_LATEST_HEADLINES,
    NEWS_BY_SEARCH_TERM_IS_ERROR_OCCURRED,
    NEWS_BY_SEARCH_TERM_IS_FETCHING,
    GET_NEWS_BY_SEARCH_TERM,
    SHOW_SIDEBAR,
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

export const newsBySearchTerm = (isNewDataRequest: boolean, payload: any) => async (dispatch: any) => {

    try {

        // If isNewDataRequest is true - rewrite state news data, otherwise - add new data to array


        // dispatch({ type: NEWS_BY_SEARCH_TERM_IS_ERROR_OCCURRED, payload: false });

        // dispatch({ type: NEWS_BY_SEARCH_TERM_IS_FETCHING });

        const { data } = await getNewsBySearchTerm(payload);

        // dispatch({ type: GET_NEWS_BY_SEARCH_TERM, payload: data.articles });
        // dispatch({ type: NEWS_BY_SEARCH_TERM_IS_FETCHING });

    } catch (error) {
        // dispatch({ type: NEWS_BY_SEARCH_TERM_IS_FETCHING });
        // dispatch({ type: NEWS_BY_SEARCH_TERM_IS_ERROR_OCCURRED, payload: true });
    }
}



export const showSidebar = () => ({ type: SHOW_SIDEBAR });