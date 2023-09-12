import { INewsRequestPayload } from "../../interfacesAndTypes";
import { getBriefSectionNews, getNews } from "../../services"
import {
    GET_BRIEF_SECTION_NEWS,
    BRIEF_SECTION_NEWS_IS_FETCHING,
    BRIEF_SECTION_NEWS_IS_ERROR_OCCURRED,
    SET_NEWS_SEARCH_TERM,
    NEWS_ERROR_OCCURRED,
    NEWS_ARE_FETCHING,
    SHOW_SIDEBAR,
    GET_NEWS,
} from "./types";


export const briefSectionNews = (payload: INewsRequestPayload) => async (dispatch: any) => {
    dispatch({
        type: BRIEF_SECTION_NEWS_IS_FETCHING,
        payload: {
            isFetching: true,
            category: payload.category
        }
    });

    try {
        dispatch({
            type: BRIEF_SECTION_NEWS_IS_ERROR_OCCURRED,
            payload: {
                isError: false,
                category: payload.category
            }
        });  


        const { data } = await getBriefSectionNews(payload);


        dispatch({ type: GET_BRIEF_SECTION_NEWS, payload: { data: data.results, category: payload.category } });

    } catch (error) {

        dispatch({
            type: BRIEF_SECTION_NEWS_IS_ERROR_OCCURRED,
            payload: {
                isError: true,
                category: payload.category
            }
        }); 
    }
    finally {

        dispatch({
            type: BRIEF_SECTION_NEWS_IS_FETCHING,
            payload: {
                isFetching: false,
                category: payload.category
            }
        });
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

export const setSearchTerm = (payload: string) => ({ type: SET_NEWS_SEARCH_TERM, payload });

export const showSidebar = () => ({ type: SHOW_SIDEBAR });