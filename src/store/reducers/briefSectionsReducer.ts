import {
    GET_BRIEF_SECTION_NEWS,
    BRIEF_SECTION_NEWS_IS_FETCHING,
    BRIEF_SECTION_NEWS_IS_ERROR_OCCURRED
} from "../actions/types";


const initialState = {
    isFetching: false,
    isErrorOccurred: false,
    data: {
        latest: null,
        technology: null,
        top: null,
        tourism: null,
        world: null
    },
    currentCategory: ''
}

const briefSectionsReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {

        case GET_BRIEF_SECTION_NEWS:

            if (!payload.category) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        latest: payload.data
                    }
                };

            } else {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [payload.category]: payload.data
                    }
                };
            }


        case BRIEF_SECTION_NEWS_IS_FETCHING:
            return {
                ...state,
                isFetching: payload.isFetching,
                currentCategory: payload.category
            };

        case BRIEF_SECTION_NEWS_IS_ERROR_OCCURRED:
            return {
                ...state,
                isErrorOccurred: payload.isError,
                currentCategory: payload.category
            };

        default:
            return state;
    }
}

export default briefSectionsReducer