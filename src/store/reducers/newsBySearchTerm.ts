import {
    NEWS_BY_SEARCH_TERM_IS_FETCHING,
    NEWS_BY_SEARCH_TERM_IS_ERROR_OCCURRED,
    GET_NEWS_BY_SEARCH_TERM
} from '../actions/types';



const initialState = {
    isFetching: false,
    isErrorOccured: false,
    totalPages: 0,
    pageNumber: 1,
    searchTerm: '',
    data: [],
}

const newsBySearchTermReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {
        case NEWS_BY_SEARCH_TERM_IS_FETCHING:
            return { ...state, isFetching: !state.isFetching };

        case NEWS_BY_SEARCH_TERM_IS_ERROR_OCCURRED:
            return { ...state, isErrorOccured: payload };

        // case SET_TOTAL_PAGES:
        //     return { ...state, totalPages: payload };

        // case SET_PAGE_NUMBER:
        //     return { ...state, pageNumber: payload };

        // case SET_SEARCH_TERM:
        //     return { ...state, searchTerm: payload };

        case GET_NEWS_BY_SEARCH_TERM:

            if (payload.isNewDataRequest) {
                return { ...state, data: payload.data };
            }
            return { ...state, data: [...state.data, ...payload.data] };


        default:
            return state;
    }
}

export default newsBySearchTermReducer 