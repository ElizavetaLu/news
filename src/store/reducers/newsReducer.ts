import {
    NEWS_ARE_FETCHING,
    NEWS_ERROR_OCCURRED,
    GET_NEWS, 
    SET_NEWS_PAGE_NUMBER,
    SET_NEWS_SEARCH_TERM
} from '../actions/types';


const initialState = {
    isFetching: false,
    isErrorOccured: false,
    totalPages: null,
    pageNumber: 1,
    searchTerm: '',
    data: [],
}

const newsReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {
        case NEWS_ARE_FETCHING:
            return { ...state, isFetching: !state.isFetching };

        case NEWS_ERROR_OCCURRED:
            return { ...state, isErrorOccured: payload };
 
        case SET_NEWS_PAGE_NUMBER:
            return { ...state, pageNumber: payload };

        case SET_NEWS_SEARCH_TERM:
            return { ...state, searchTerm: payload };

        case GET_NEWS:

            if (payload.isNewDataRequest) {
                return {
                    ...state,
                    data: payload.data,
                    totalPages: payload.totalPages
                };
            }
            return { ...state, data: [...state.data, ...payload.data] };


        default:
            return state;
    }
}

export default newsReducer 