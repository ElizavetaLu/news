import { combineReducers } from "redux";  
import latestHeadlinesReducer from "./latestHeadlinesReducer"; 
import newsBySearchTermReducer from "./newsBySearchTerm";


const rootReducers = combineReducers({
    latestHeadlines: latestHeadlinesReducer,
    newsBySearchTerm: newsBySearchTermReducer,
})

export default rootReducers