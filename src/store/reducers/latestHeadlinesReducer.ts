import {
    GET_LATEST_HEADLINES,
    LATEST_HEADLINES_IS_FETCHING,
    LATEST_HEADLINES_IS_ERROR_OCCURRED
} from "../actions/types";


const initialState = {
    isFetching: false,
    isErrorOccurred: false,
    data: null,
}

const latestHeadlinesReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {

        case GET_LATEST_HEADLINES:
            return { ...state, data: payload };

        case LATEST_HEADLINES_IS_FETCHING:
            return { ...state, isFetching: !state.isFetching };

        case LATEST_HEADLINES_IS_ERROR_OCCURRED:
            return { ...state, isErrorOccurred: payload };

        default:
            return state;
    }
}

export default latestHeadlinesReducer