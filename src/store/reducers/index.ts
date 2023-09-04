import { combineReducers } from "redux";  
import latestHeadlinesReducer from "./latestHeadlinesReducer";  
import sidebarReducer from "./sidebarReducer";
import newsReducer from "./newsReducer";


const rootReducers = combineReducers({
    latestHeadlines: latestHeadlinesReducer, 
    news: newsReducer,
    sidebar: sidebarReducer,
})

export default rootReducers