import { combineReducers } from "redux";  
import latestHeadlinesReducer from "./latestHeadlinesReducer"; 
import newsBySearchTermReducer from "./newsBySearchTerm"; 
import sidebarReducer from "./sidebarReducer";


const rootReducers = combineReducers({
    latestHeadlines: latestHeadlinesReducer,
    newsBySearchTerm: newsBySearchTermReducer,
    sidebar: sidebarReducer,
})

export default rootReducers