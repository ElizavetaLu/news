import { AnyAction } from "redux";
import { getLatestHeadlines } from "../../services"
import { GET_LATEST_HEADLINES } from "./types";

export const latestHeadlines = (payload: any) => async (dispatch: any) => {
    try {
        const { data } = await getLatestHeadlines(payload)
        dispatch({ type: GET_LATEST_HEADLINES, payload: data.articles });
        console.log(data)
    } catch (error) {

    }
}