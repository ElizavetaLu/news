import {
    NEWS_ARE_FETCHING,
    NEWS_ERROR_OCCURRED,
    GET_NEWS,
    SET_NEWS_SEARCH_TERM
} from '../actions/types';


const initialState = {
    isFetching: false,
    isErrorOccured: true,
    totalPages: null,
    nextPageNumber: null,
    searchTerm: '',
    data: [],
}

const newsReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {
        case NEWS_ARE_FETCHING:
            return { ...state, isFetching: payload };

        case NEWS_ERROR_OCCURRED:
            return { ...state, isErrorOccured: payload };

        case SET_NEWS_SEARCH_TERM:
            return { ...state, searchTerm: payload };

        case GET_NEWS:

            if (payload.isNewDataRequest) {
                return {
                    ...state,
                    nextPageNumber: payload.nextPageNumber,
                    data: payload.data,
                    totalPages: payload.totalPages
                };
            }
            return { ...state, nextPageNumber: payload.nextPageNumber, data: [...new Set([...state.data, ...payload.data])] };

        default:
            return state;
    }
}

export default newsReducer 